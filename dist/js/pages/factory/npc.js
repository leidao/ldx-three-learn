/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-10 10:14:58
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 14:55:48
 */
import * as THREE from 'three';
export class NPC {
    object;
    pathfinder;
    name = '';
    actionName = '';
    /**  npc动作 */
    animations = {};
    app;
    speed;
    calculatedPath;
    waypoints;
    quaternion = new THREE.Quaternion();
    pathLines;
    navMeshGroup = new THREE.Group();
    pathColor = new THREE.Color(0xffffff);
    /** 是否显示路径 */
    showPath = false;
    dead = false;
    ZONE = '';
    mixer;
    curAction;
    constructor(options) {
        this.name = options.name || 'NPC';
        // npc动作
        this.animations = {};
        this.object = options.object;
        // 把npc添加进场景
        options.app.viewer.scene.add(options.object);
        this.showPath = options.showPath || false;
        this.waypoints = options.waypoints || [];
        // this.waypoints = options.waypoints
        // npc走路速度
        this.speed = options.speed;
        // game
        this.app = options.app;
        // 寻路相关
        if (options.app.pathfinder) {
            this.pathfinder = options.app.pathfinder;
            this.ZONE = options.zone;
            this.navMeshGroup = this.pathfinder.getGroup(this.ZONE, this.object.position);
        }
        const pt = this.object.position.clone();
        pt.z += 10;
        this.object.lookAt(pt);
        // npc动作相关
        if (options.animations) {
            //Use this option to set multiple animations directly
            this.mixer = new THREE.AnimationMixer(options.object);
            options.animations.forEach((animation) => {
                this.animations[animation.name.toLowerCase()] = animation;
            });
        }
    }
    get randomWaypoint() {
        const index = Math.floor(Math.random() * this.waypoints.length);
        return this.waypoints[index];
    }
    set action(name) {
        if (this.actionName == name.toLowerCase())
            return;
        const clip = this.animations[name.toLowerCase()];
        if (clip !== undefined) {
            const action = this.mixer.clipAction(clip);
            if (name == 'shot') {
                action.clampWhenFinished = true;
                action.setLoop(THREE.LoopOnce, THREE.LoopRepeat);
            }
            action.reset();
            const nofade = this.actionName == 'shot';
            this.actionName = name.toLowerCase();
            action.play();
            if (this.curAction) {
                if (nofade) {
                    this.curAction.enabled = false;
                }
                else {
                    this.curAction.crossFadeTo(action, 0.5, true);
                }
            }
            this.curAction = action;
        }
    }
    setTargetDirection(pt) {
        const player = this.object;
        pt.y = player.position.y;
        const quaternion = player.quaternion.clone();
        player.lookAt(pt);
        this.quaternion = player.quaternion.clone();
        player.quaternion.copy(quaternion);
    }
    newPath(pt) {
        const player = this.object;
        if (!this.pathfinder) {
            // 寻路算法未准备好，先等待
            this.calculatedPath = [pt.clone()];
            this.setTargetDirection(pt.clone());
            this.action = 'walking';
            return;
        }
        // 当前位置，目标位置，使用的网格mesh
        this.calculatedPath = this.pathfinder.findPath(player.position, pt, this.ZONE, this.navMeshGroup);
        if (this.calculatedPath && this.calculatedPath.length > 0) {
            // 有一条路径
            this.action = 'walking';
            this.setTargetDirection(this.calculatedPath[0].clone());
            if (this.showPath) {
                const material = new THREE.LineBasicMaterial({
                    color: this.pathColor,
                    linewidth: 2
                });
                const points = [player.position];
                this.calculatedPath.forEach((point) => {
                    points.push(point.clone());
                });
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                this.pathLines = new THREE.Line(geometry, material);
                // 添加路径进行显示
                this.app.viewer.scene.add(this.pathLines);
            }
        }
        else {
            // 没有合适的路径，删除上一次的路径显示
            this.action = 'idle';
            if (this.pathfinder) {
                // 最近的玩家节点
                const closestPlayerNode = this.pathfinder.getClosestNode(player.position, this.ZONE, this.navMeshGroup);
                const clamped = new THREE.Vector3();
                this.pathfinder.clampStep(player.position, pt.clone(), closestPlayerNode, this.ZONE, this.navMeshGroup, clamped);
                if (this.pathLines) {
                    this.app.viewer.scene.remove(this.pathLines);
                }
            }
        }
    }
    update(dt) {
        const speed = this.speed;
        const player = this.object;
        if (this.mixer)
            this.mixer.update(dt);
        if (this.calculatedPath && this.calculatedPath.length > 0) {
            const targetPosition = this.calculatedPath[0];
            // 玩家下一个目标点的位置减去当前玩家的位置，获取一个方向向量
            const vel = targetPosition.clone().sub(player.position);
            // 判断两个点之间的距离大小
            let pathLegComplete = vel.lengthSq() < 0.01;
            if (!pathLegComplete) {
                // 玩家和下一个要去的点位之间的平方根距离
                const preDistanceSq = player.position.distanceToSquared(targetPosition);
                vel.normalize();
                // 插值到另一个四元数
                if (this.quaternion)
                    player.quaternion.slerp(this.quaternion, 0.1);
                player.position.add(vel.multiplyScalar(dt * speed));
                const newDistanceSq = player.position.distanceToSquared(targetPosition);
                pathLegComplete = newDistanceSq > preDistanceSq;
            }
            else {
                this.calculatedPath.shift();
                if (this.calculatedPath.length === 0) {
                    if (this.waypoints !== undefined) {
                        this.newPath(this.randomWaypoint);
                    }
                    player.position.copy(targetPosition);
                    this.action = 'idle';
                }
                else {
                    this.setTargetDirection(targetPosition.clone());
                }
            }
        }
        else {
            if (!this.dead && this.waypoints !== undefined)
                this.newPath(this.randomWaypoint);
        }
    }
}
