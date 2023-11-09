/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-07 19:09:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-09 23:30:48
 */
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
export class Game {
    clock;
    /** 视图 */
    viewer;
    css3Render;
    /** 加载器 */
    textLoader;
    fileLoader;
    group = new THREE.Group();
    isRotate = true;
    constructor(viewer) {
        this.viewer = viewer;
        viewer.useLoadingManager();
        this.clock = new THREE.Clock();
        this.group = new THREE.Group();
        this.textLoader = new THREE.TextureLoader(viewer.loadmanager);
        this.textLoader.setCrossOrigin('');
        this.fileLoader = new THREE.FileLoader(viewer.loadmanager);
        viewer.scene.add(this.group);
        this.init();
        viewer.on('load_complete', () => {
            this.group.rotation.set(-Math.PI / 2.6, -Math.PI / 8, 0);
            this.group.position.set(10, 30, 0);
            this.group.scale.set(1.16, 1.16, 1.16);
        });
    }
    init() {
        const { width, height } = this.viewer.container.getBoundingClientRect();
        this.css3Render = new CSS3DRenderer();
        this.css3Render.setSize(width, height);
        this.css3Render.domElement.style.position = 'absolute';
        this.css3Render.domElement.style.pointerEvents = 'none';
        this.css3Render.domElement.style.top = '0px';
        this.css3Render.domElement.style.left = '0px';
        const ele = this.css3Render.domElement;
        ele.id = 'css3Render';
        this.viewer.container.appendChild(ele);
        this.loadSky();
        this.createCircle();
        this.createRing();
        this.createLine();
        // this.listen()
        // this.creatPlan()
    }
    render() {
        this.viewer.render();
        this.css3Render?.render(this.viewer.scene, this.viewer.camera);
    }
    onResize = () => {
        const { width, height } = this.viewer.container.getBoundingClientRect();
        const k = width / height;
        this.viewer.renderer.setSize(width, height);
        this.css3Render.setSize(width, height);
        this.viewer.camera.aspect = k;
        this.viewer.camera.updateProjectionMatrix();
        this.render();
    };
    listen = () => {
        window.addEventListener('resize', this.onResize);
    };
    destroy = () => {
        window.removeEventListener('resize', this.onResize);
    };
    /** 加载天空 */
    loadSky() {
        this.textLoader.setPath('nebularOrbit/img/');
        this.textLoader.load('背景星空图.png', (texture) => {
            this.viewer.scene.background = texture;
            this.render();
        }, (xhr) => {
            this.viewer.onProgress('背景星空图.png', xhr);
        });
    }
    /** 创建星云 */
    createCircle() {
        this.textLoader.setPath('nebularOrbit/img/');
        this.textLoader.load('生平-背景圈.png', (texture) => {
            texture.encoding = THREE.sRGBEncoding;
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0.5
            });
            const geometry = new THREE.PlaneGeometry(230, 240);
            const plane = new THREE.Mesh(geometry, material);
            plane.rotation.set(0, 0, 0);
            this.group.add(plane);
            this.render();
        }, (xhr) => {
            this.viewer.onProgress('生平-背景圈.png', xhr);
        });
        // return plane
    }
    /** 创建圆环 */
    createRing() {
        const geometry = new THREE.RingGeometry(80, 80.8, 200);
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.4
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, 0, -1);
        this.group.add(mesh);
        // return mesh
    }
    /** 创建线段 */
    createLine() {
        this.fileLoader.setPath('nebularOrbit/data/');
        this.fileLoader.load('孔子生平.json', (file) => {
            const deeds = (JSON.parse(file) || {}).lifetime || [];
            const arc = new THREE.ArcCurve(0, 0, 80.5, 1.6, 1.6 + 2 * Math.PI, false);
            const allPointArr = arc.getPoints(270);
            const pointArr = [];
            for (let i = 0; i < 27; i++) {
                const pointIndex = i * 10;
                pointArr.push(allPointArr[pointIndex]);
            }
            let currentDom;
            for (let i = 0; i < pointArr.length; i++) {
                const vector = pointArr[i];
                const point = this.createPoint(deeds[i], i);
                point.element.addEventListener('click', () => {
                    if (currentDom) {
                        const imgDom = currentDom.getElementsByClassName('circle-img')[0];
                        imgDom.src = 'nebularOrbit/img/point.png';
                        imgDom.style.transform = 'scale(1)';
                    }
                    const imgDom = point.element.getElementsByClassName('circle-img')[0];
                    imgDom.src = 'nebularOrbit/img/point_active.png';
                    imgDom.style.transform = 'scale(2)';
                    currentDom = point.element;
                    const index = +(point.element.getAttribute('_pointIndex') || 0);
                    const data = deeds[index];
                    this.viewer.emit('point_click', data);
                });
                point.element.addEventListener('mouseenter', () => {
                    this.isRotate = false;
                });
                point.element.addEventListener('mouseleave', () => {
                    this.isRotate = true;
                });
                point.position.set(vector.x, vector.y, 0);
                this.group.add(point);
                this.render();
            }
        }, (xhr) => {
            this.viewer.onProgress('孔子生平.json', xhr);
        });
    }
    createPoint(data, index) {
        const divEle = document.createElement('div');
        divEle.setAttribute('_pointIndex', index);
        const html = `
  <div style="position:relative;top:10px;left:0;width:60px;height:60px;cursor: pointer;">
    <img class="circle-img" width=60 height=60 style="position:relative;top:0;left:0;transition:0.5s;" src='/nebularOrbit/img/point.png' />
    <div class="circle-text" style="width:80px;position:relative;top:-18px;left:0;color:#fff; text-align: center;font-size:12px">${data.time}</div>
  </div>
`;
        //  + '索引：' + index
        divEle.innerHTML = html;
        const sprite = new CSS3DSprite(divEle);
        const s = 0.1;
        sprite.userData.index = index;
        sprite.scale.set(s, s, s);
        sprite.userData.isCss23D = true;
        return sprite;
    }
    creatPlan() {
        this.textLoader.setPath('nebularOrbit/img/');
        this.textLoader.load('星球.png', (texturt) => {
            const material = new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0.8,
                side: THREE.DoubleSide,
                map: texturt
            });
            const geometry = new THREE.PlaneGeometry(200, 200);
            const mesh = new THREE.Mesh(geometry, material);
            this.viewer.scene.add(mesh);
        }, (xhr) => {
            this.viewer.onProgress('星球.png', xhr);
        });
    }
    update = () => {
        const dt = this.clock.getDelta();
        if (this.isRotate) {
            this.group.rotateZ(dt * 0.1);
        }
        this.render();
    };
}
