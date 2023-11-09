/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-11-04 19:09:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-09 21:09:53
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { lon2phi, lon2xyz, startEndQuaternion, threePointToCenter } from '@/three';
export class Game {
    clock;
    /** 加载器 */
    textLoader;
    fileLoader;
    fontLoad;
    /** 视图 */
    viewer;
    uniforms = {};
    labelRenderer;
    controls;
    R = 100;
    customUniforms = {
        baseTexture: { type: 't', value: {} },
        mixAmount: { type: 'f', value: 0.0 }
    };
    group3D = new THREE.Group();
    group2D = new THREE.Group();
    sphere;
    constructor(viewer) {
        viewer.useLoadingManager();
        viewer.scene.add(this.group3D);
        this.viewer = viewer;
        this.textLoader = new THREE.TextureLoader();
        this.textLoader.setCrossOrigin('');
        // viewer.renderer.outputEncoding = THREE.sRGBEncoding
        this.fileLoader = new THREE.FileLoader(viewer.loadmanager);
        this.fileLoader.setResponseType('json');
        this.fontLoad = new FontLoader(viewer.loadmanager);
        this.clock = new THREE.Clock();
        this.uniforms = {};
        this.listen();
    }
    useCss3Render() {
        const { width, height } = this.viewer.container.getBoundingClientRect();
        this.labelRenderer = new CSS3DRenderer();
        this.labelRenderer.setSize(width, height);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        const ele = this.labelRenderer.domElement;
        ele.id = 'tempId';
        this.viewer.container.appendChild(ele);
        // 创建控件对象
        this.controls = new OrbitControls(this.viewer.camera, ele);
        //监听鼠标、键盘事件
        this.controls.addEventListener('change', () => {
            this.render();
        });
        this.controls.enablePan = false;
        // this.controls.enableZoom = false
        this.controls.minDistance = 50; // 最小距离
        this.controls.maxDistance = 250; // 最大距离
        this.controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN
        };
    }
    onResize = () => {
        const { width, height } = this.viewer.container.getBoundingClientRect();
        const k = width / height;
        this.viewer.renderer.setSize(width, height);
        this.labelRenderer.setSize(width, height);
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
    startGame() {
        this.viewer.scene.translateX(-10);
        this.viewer.scene.translateY(-15);
        this.loadSky();
        this.drawLocation([{ to: [117.045982, 35.794391], size: 35 }], true);
        this.fileLoader.load('propagate/data/map.json', (data) => {
            this.useCss3Render();
            const R = this.R;
            this.createEarth(R);
            this.drawOutline();
            this.drawLines(R, data);
            // this.drawFlyLine(data)
            this.createText(data);
            this.drawLocation(data);
        }, (xhr) => {
            this.viewer.onProgress('propagate/data/map.json', xhr);
        });
    }
    render() {
        this.viewer.render();
        this.labelRenderer?.render(this.viewer.scene, this.viewer.camera);
    }
    /** 加载天空 */
    loadSky() {
        this.textLoader.load('propagate/img/bg.png', (texture) => {
            this.viewer.scene.background = texture;
            this.render();
        });
    }
    createEarth = (R) => {
        this.textLoader.load('propagate/img/earth.png', (texture) => {
            this.customUniforms.baseTexture.value = texture;
            const geometry = new THREE.SphereGeometry(R, 100, 100);
            // this.customUniforms.mixAmount.value = 0.5 * (1.0 + Math.sin(1.5))
            const material = new THREE.ShaderMaterial({
                uniforms: this.customUniforms,
                vertexShader: `uniform float mixAmount;
                        varying vec2 vUv;
                        void main()
                        {
                            vUv = uv;
                          vec3 goalPosition = 200.0 * vec3( uv.x,uv.y/2.0, 0 ) + vec3(-100.0,-50.0, 0.0);
                          vec3 newPosition = mix( position, goalPosition, mixAmount );
                          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
                        }
                      `,
                fragmentShader: `uniform sampler2D baseTexture;
                          varying vec2 vUv;

                          void main()
                          {
                              gl_FragColor = texture2D( baseTexture, vUv );
                          }
                        `,
                side: THREE.DoubleSide,
                transparent: true,
                // depthWrite: true,
                // depthTest: true,
                // blending: THREE.AdditiveBlending,
                opacity: 1
                // color: 0xffffff
            });
            this.sphere = new THREE.Mesh(geometry, material);
            this.viewer.scene.add(this.sphere);
            this.render();
        });
    };
    /** 绘制轮廓线 */
    drawOutline = () => {
        const R = this.R;
        const shapeGroup = new THREE.Group();
        // const material = new THREE.MeshBasicMaterial({
        //   color: '#000000',
        //   // color: 0x00ffff,
        //   side: THREE.DoubleSide,
        //   // transparent: true,
        //   opacity: 0.35
        // })
        const lineMaterial = new THREE.ShaderMaterial({
            uniforms: this.customUniforms,
            vertexShader: `uniform float mixAmount;
                     attribute vec3 current;
                        void main()
                        {
                          vec3 newPosition = mix( position, current, mixAmount );
                          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
                        }
                      `,
            fragmentShader: `void main()
                        {
                            gl_FragColor = vec4(1.0,1.0,1.0,0.2);
                        }
                      `,
            side: THREE.DoubleSide,
            transparent: true
            // opacity: 0.2
            // color: 0xffffff
        });
        this.fileLoader.load('propagate/data/world.json', (data) => {
            data.features.forEach((country) => {
                if (country.geometry.type === 'Polygon') {
                    const pointArr1 = [];
                    const pointArr2 = [];
                    const coordinates = country.geometry.coordinates[0] || [];
                    if (coordinates.length === 0)
                        return;
                    coordinates.forEach((elem) => {
                        pointArr1.push(elem[0], elem[1], 0);
                        const coord = lon2xyz(R * 1.001, elem[0], elem[1]);
                        pointArr2.push(coord.x, coord.y, coord.z);
                    });
                    // this.line2DGroup.add(this.drawLineLoop(pointArr1, pointArr2, lineMaterial))
                    shapeGroup.add(this.drawLineLoop(pointArr1, pointArr2, lineMaterial));
                }
                else if (country.geometry.type === 'MultiPolygon') {
                    country.geometry.coordinates.forEach((polygon) => {
                        const pointArr1 = [];
                        const pointArr2 = [];
                        const coordinates = polygon[0] || [];
                        if (coordinates.length === 0)
                            return;
                        coordinates.forEach((elem) => {
                            pointArr1.push(elem[0], elem[1], 0);
                            const coord = lon2xyz(R * 1.001, elem[0], elem[1]);
                            pointArr2.push(coord.x, coord.y, coord.z);
                        });
                        shapeGroup.add(this.drawLineLoop(pointArr1, pointArr2, lineMaterial));
                    });
                }
            });
            // this.viewer.scene.add(this.line2DGroup)
            this.viewer.scene.add(shapeGroup);
            this.render();
        }, (xhr) => {
            this.viewer.onProgress('propagate/data/world.json', xhr);
        });
    };
    drawLineLoop = (point1Arr, point2Arr, material) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(point2Arr);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        // 传递当前所在位置
        geometry.setAttribute('current', new THREE.BufferAttribute(new Float32Array(point1Arr), 3));
        const line = new THREE.LineLoop(geometry, material);
        return line;
    };
    /** 绘制填充 */
    drawShpae = (pointArr, material) => {
        const vector2Arr = [];
        pointArr.forEach((elem) => {
            vector2Arr.push(new THREE.Vector2(elem[0], elem[1]));
        });
        const shape = new THREE.Shape(vector2Arr);
        const geometry = new THREE.ShapeGeometry(shape);
        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
    };
    /** 飞线 */
    drawLines = (R, data) => {
        const material = new THREE.LineBasicMaterial({ color: 0xe0e0e0 });
        data.forEach((elem) => {
            const { to, name, isLine } = elem;
            if (!to)
                return;
            if (!isLine)
                return;
            if (name === '曲阜')
                return;
            const { fly: fly2d, point: point2d } = this.draw2DLine(elem, material);
            this.group2D.add(fly2d, point2d);
            const { fly: fly3d, point: point3d } = this.draw3DLine(elem, material);
            this.group3D.add(fly3d, point3d);
            this.render();
        });
    };
    draw2DLine(elem, material) {
        const { from, to, name } = elem;
        const formXYZ = new THREE.Vector3(from[0], from[1], 0);
        const toXYZ = new THREE.Vector3(to[0], to[1], 0);
        const center = formXYZ.clone().lerp(toXYZ, 0.5);
        const length = formXYZ.clone().distanceTo(toXYZ);
        center.z += length / 3;
        const curve = new THREE.QuadraticBezierCurve3(formXYZ, center, toXYZ);
        const number = curve.getLength() * 4;
        const points = curve.getPoints(number);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const fly = new THREE.Line(geometry, material);
        const point = this.drawFlyLine(points, number, `${name}2d`);
        return { fly, point };
    }
    draw3DLine(elem, material) {
        const R = this.R;
        const { from, to, name } = elem;
        const { phi: fromPhi, theta: fromTheta } = lon2phi(from[0], from[1]);
        const formXYZ = new THREE.Vector3().setFromSphericalCoords(100, fromPhi, fromTheta);
        const { phi: toPhi, theta: toTheta } = lon2phi(to[0], to[1]);
        const toXYZ = new THREE.Vector3().setFromSphericalCoords(100, toPhi, toTheta);
        const startEndQua = startEndQuaternion(formXYZ, toXYZ);
        const v1 = startEndQua.startSphere;
        const v2 = startEndQua.endSphere;
        const center = v1.clone().lerp(v2, 0.5).normalize();
        const rad = radianAOB(v1, v2, new THREE.Vector3(0, 0, 0));
        const via = center.multiplyScalar(R + R * rad * 0.1);
        const circle = threePointToCenter(v1, v2, via);
        const flyArcR = Math.abs(circle.y - via.y);
        const rad2 = radianAOB(v1, new THREE.Vector3(0, -1, 0), circle);
        const startAngle = -Math.PI / 2 + rad2;
        const emdAngle = Math.PI - startAngle;
        const curve = new THREE.ArcCurve(circle.x, circle.y, flyArcR, startAngle, emdAngle, false);
        const number = curve.getLength() * 4;
        const points = curve.getPoints(number);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const fly = new THREE.Line(geometry, material);
        fly.quaternion.multiply(startEndQua.quaternion);
        const point = this.drawFlyLine(points.map((point) => {
            return new THREE.Vector3(point.x, point.y, 0).applyQuaternion(startEndQua.quaternion);
        }), number, `${name}3d`);
        return { fly, point };
    }
    drawFlyLine = (points, number, name) => {
        const positions = [];
        const attrPositions = [];
        const attrCindex = [];
        const attrCnumber = [];
        // 粒子位置计算
        points.forEach((elem, i) => {
            const index = i / (number - 1);
            positions.push({
                x: elem.x,
                y: elem.y,
                z: elem.z
            });
            attrCindex.push(index);
            attrCnumber.push(i);
        });
        positions.forEach((p) => {
            attrPositions.push(p.x, p.y, p.z);
        });
        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints(points);
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(attrPositions, 3));
        // 传递当前所在位置
        geometry.setAttribute('index', new THREE.Float32BufferAttribute(attrCindex, 1));
        geometry.setAttribute('current', new THREE.Float32BufferAttribute(attrCnumber, 1));
        this.uniforms[name] = {
            uColor: {
                value: new THREE.Color(0x0ad5f0) // 颜色
            },
            uRange: {
                value: 20 // 显示当前范围的个数
            },
            uSize: {
                value: 6 // 粒子大小
            },
            uTotal: {
                value: number // 当前粒子的所有的总数
            },
            uTime: {
                value: 0 //
            },
            uSpeed: {
                value: (Math.random() * 4 + 4) / 10
            }
        };
        const shader = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: THREE.AdditiveBlending,
            uniforms: this.uniforms[name],
            vertexShader: `
        attribute float index;
        attribute float current;
        uniform float uTime;
        uniform float uSize;
        uniform float uSpeed;
        uniform float uRange; // 展示区间
        uniform float uTotal; // 粒子总数
        uniform vec3 uColor;
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
            // 需要当前显示的索引
            float size = uSize;
            float showNumber = uTotal * mod(uTime * uSpeed, 1.1);
            if (showNumber > current && showNumber < current + uRange) {
                float uIndex = ((current + uRange) - showNumber) / uRange;
                size *= uIndex;
                vOpacity = 1.0;
            } else {
                vOpacity = 0.0;
            }
            // 顶点着色器计算后的Position
            vColor = uColor;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            // 大小
            gl_PointSize = size * 300.0 / (-mvPosition.z);
        }`,
            fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
            float distanceToCenter = distance(gl_PointCoord,vec2(0.5));
            float strength = 1.0 - (distanceToCenter * 2.0);
            if(vOpacity <= 0.0){
              gl_FragColor = vec4(vColor, 0.0);
            }else{
              gl_FragColor = vec4(vColor, strength);
            }
        }`
        });
        // shader.onBeforeCompile = (shader) => {
        //   shader.uniforms.time = this.time
        //   shader.uniforms.uStartTime = this.StartTime
        // }
        const point = new THREE.Points(geometry, shader);
        return point;
    };
    drawLocation = (data, flag = false) => {
        const material = new THREE.MeshBasicMaterial({
            transparent: true,
            side: THREE.DoubleSide
        });
        this.textLoader.load('propagate/img/136.png', (texture) => {
            data.forEach((elem) => {
                const { to, size } = elem;
                const uSize = Number(size) + 2;
                const k = flag ? size : uSize > 16 ? 16 : uSize;
                if (!to)
                    return;
                // const toXYZ = lon2xyz(R * 1.0001, lon, lat)
                const { x, y, z } = new THREE.Vector3(to[0], to[1], 0);
                const geometry = new THREE.PlaneGeometry(k, k);
                material.map = texture;
                const mesh = new THREE.Mesh(geometry, material);
                // const coord = new THREE.Vector3(x, y, z).normalize()
                // const normal = new THREE.Vector3(0, 0, 1)
                // mesh.quaternion.setFromUnitVectors(normal, coord)
                // mesh.position.set(x, y, z + 0.02)
                mesh.position.set(x, y, z + 0.02);
                this.group2D.add(mesh);
                const mesh3d = mesh.clone();
                const { phi, theta } = lon2phi(to[0], to[1]);
                mesh3d.position.setFromSphericalCoords(100, phi, theta);
                const vector = new THREE.Vector3();
                vector.copy(mesh3d.position).multiplyScalar(2);
                mesh3d.lookAt(vector);
                this.group3D.add(mesh3d);
            });
            this.render();
        });
    };
    /** 绘制文字 */
    createText(data) {
        data.forEach((elem) => {
            const { to, name, size, isLine } = elem;
            if (!name)
                return;
            if (!isLine)
                return;
            if (!to)
                return;
            const div = document.createElement('div');
            div.style.fontSize = name === '曲阜' ? '20px' : '12px';
            div.style.color = '#ffffff';
            div.style.position = 'absolute';
            div.style.fontFamily = 'HanaA';
            div.style.whiteSpace = 'nowrap';
            let html = `<span>${name}</span> `;
            if (size > 1) {
                html += `<span style="font-size:28px;vertical-align: sub;">${size}</span> <span>所</span>`;
            }
            div.innerHTML = html;
            const objectCSS = new CSS3DObject(div);
            objectCSS.name = '2d';
            // const { x, y, z } = lon2xyz(this.R, to[0], to[1])
            objectCSS.position.set(to[0], to[1] - 1, 0);
            objectCSS.scale.set(0.15, 0.15, 0.15);
            if (name == '曲阜') {
                objectCSS.scale.set(0.2, 0.2, 0.2);
                objectCSS.position.set(to[0], to[1] - 4, 0);
            }
            this.group2D.add(objectCSS);
            const object3DCSS = objectCSS.clone();
            object3DCSS.name = '3d';
            const { phi, theta } = lon2phi(to[0], to[1]);
            object3DCSS.position.setFromSphericalCoords(100, phi, theta);
            const vector = new THREE.Vector3();
            vector.copy(object3DCSS.position).multiplyScalar(2);
            object3DCSS.lookAt(vector);
            object3DCSS.scale.set(0.15, 0.15, 0.15);
            if (name == '曲阜') {
                object3DCSS.scale.set(0.2, 0.2, 0.2);
            }
            this.group3D.add(object3DCSS);
            this.render();
        });
    }
    update = () => {
        const time = this.clock.getElapsedTime();
        // console.log('0.5 * (1.0 + Math.sin(time))', Math.sin(time))
        // this.customUniforms.mixAmount.value = 0.5 * (1.0 + Math.sin(time))
        Object.keys(this.uniforms).forEach((name) => {
            this.uniforms[name].uTime.value = time;
        });
        this.render();
    };
}
const radianAOB = (A, B, O) => {
    const dir1 = A.clone().sub(O).normalize();
    const dir2 = B.clone().sub(O).normalize();
    const cosAngle = dir1.clone().dot(dir2);
    const rad = Math.acos(cosAngle);
    return rad;
};
