/*
 * @Description:
 * @Author: ldx
 * @Date: 2023-12-01 17:17:18
 * @LastEditors: ldx
 * @LastEditTime: 2023-12-08 16:39:54
 */
import _ from 'lodash';
import { Img, Line, OrbitControler, Rect, Scene, Vector2 } from '@/canvas';
import { Ruler } from '@/canvas/objects/ruler';
import vcc from './imgs/electricity/vcc.svg';
export class Editor {
    /** 场景 */
    scene;
    /** 控制器 */
    orbitControler;
    option;
    /** 标尺 */
    ruler;
    /** 鼠标按下时的位置 */
    mouseStart = new Vector2(Infinity);
    /** 是否按下鼠标 */
    isMousedown = false;
    /** 缩放速度 */
    zoomSpeed = 1;
    /** 缩放比例 */
    scale = 1;
    /** canvas元素 */
    domElement;
    /* 鼠标的裁剪坐标位 */
    mouseClipPos = new Vector2(Infinity);
    /** 当前工具栏 */
    toolOperation = 'panning';
    /** 鼠标是否按下 */
    isPanning = false;
    line;
    /** 选中的图片 */
    selectImg;
    /** 事件 */
    constructor(option) {
        this.option = option;
        this.init();
    }
    init() {
        if (!this.option.container)
            return;
        const container = this.option.container;
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        this.domElement = canvas;
        this.scene = new Scene({ domElement: canvas });
        const rulerConfig = {
            x: 0,
            y: 0,
            w: 20,
            h: 16 // 刻度线基础高度
        };
        // this.scene.camera.position.set(20, 20)
        const image = new Image();
        image.src = vcc;
        image.onload = () => {
            const pattern = new Img({
                image,
                position: new Vector2(100, 100),
                size: new Vector2(70, 50)
                // offset: new Vector2(70, 50).multiplyScalar(-0.5)
            });
            this.scene.add(pattern);
            this.scene.render();
        };
        this.ruler = new Ruler(rulerConfig);
        this.scene.add(this.ruler);
        const rect = new Rect({ startX: 0, startY: 0, width: 100, height: 100 });
        this.scene.add(rect);
        this.orbitControler = new OrbitControler(this.scene);
        this.orbitControler.maxZoom = 10;
        this.orbitControler.minZoom = 0.1;
        this.scene.render();
        this.orbitControler.addEventListener('change', () => {
            this.scene.render();
        });
        this.listen();
    }
    /** 缩放 */
    wheel = _.throttle((event) => {
        if (event.ctrlKey || event.metaKey) {
            this.orbitControler.wheel(event);
        }
        else {
            const down = new PointerEvent('pointerdown', { clientX: 0, clientY: 0 });
            this.orbitControler.pointerdown(down);
            const move = new PointerEvent('pointermove', {
                clientX: -event.deltaX,
                clientY: -event.deltaY
            });
            this.orbitControler.pointermove(move);
            this.orbitControler.pointerup();
        }
    }, 10);
    /** 鼠标按下 */
    pointerdown = (event) => {
        const { button, clientX, clientY } = event;
        if (button === 0) {
            this.isPanning = true;
            this.toolOperation === 'panning' && this.orbitControler.pointerdown(event);
            if (this.toolOperation === 'line') {
                this.mouseStart.copy(this.scene.clientToCoord(clientX, clientY));
                if (this.line) {
                    const [y, x] = [...this.line.points].reverse();
                    const deltaX = Math.abs(this.mouseStart.x - x);
                    const deltaY = Math.abs(this.mouseStart.y - y);
                    const max = Math.max(deltaX, deltaY);
                    const mouseX = max === deltaX ? this.mouseStart.x : x;
                    const mouseY = max === deltaY ? this.mouseStart.y : y;
                    this.line.addPoints([mouseX, mouseY]);
                    this.scene.render();
                }
            }
        }
    };
    /** 鼠标移动 */
    pointermove = _.throttle((event) => {
        const { clientX, clientY } = event;
        this.mouseClipPos.copy(this.scene.clientToCoord(clientX, clientY));
        // console.log(' this.mouseStart', clientX, clientY)
        this.toolOperation === 'panning' && this.orbitControler.pointermove(event);
        // 绘制线段
        if (this.toolOperation === 'line' && this.mouseStart.isEmpty()) {
            const [x, y] = [
                ...(this.line?.points || this.mouseStart.toArray().concat(0, 0))
            ].slice(-4, -2);
            const deltaX = Math.abs(this.mouseClipPos.x - x);
            const deltaY = Math.abs(this.mouseClipPos.y - y);
            const max = Math.max(deltaX, deltaY);
            const mouseX = max === deltaX ? this.mouseClipPos.x : x;
            const mouseY = max === deltaY ? this.mouseClipPos.y : y;
            if (!this.line) {
                this.line = new Line();
                this.scene.add(this.line);
                const points = [this.mouseStart.x, this.mouseStart.y, mouseX, mouseY];
                this.line.addPoints(points);
            }
            else {
                this.line.replacePoint(mouseX, mouseY);
            }
            this.scene.render();
        }
    }, 10);
    /** 鼠标松开 */
    pointerup = (event) => {
        if (event.button === 0) {
            this.isPanning = false;
            this.orbitControler.pointerup();
        }
    };
    /** 鼠标移出 */
    mouseout = () => {
        this.orbitControler.pointerup();
    };
    resize = _.throttle(() => {
        const container = this.option.container;
        const width = container.clientWidth;
        const height = container.clientHeight;
        this.scene.setViewPort(width, height);
        this.scene.render();
    }, 20);
    /** 拖拽进入目标元素 */
    dragenter = (event) => {
        // 表示在当前位置放置拖拽元素将进行移动操作
        event.dataTransfer && (event.dataTransfer.dropEffect = 'move');
    };
    /** 拖拽离开目标元素 */
    dragleave = (event) => {
        // 表示在当前位置不允许放置拖拽元素，即拖放操作无效。
        event.dataTransfer && (event.dataTransfer.dropEffect = 'none');
    };
    /** 拖拽元素在目标元素上移动 */
    dragover = (event) => {
        // 如果默认行为没有被阻止,drop事件不会被触发
        event.preventDefault();
    };
    /** 拖拽元素在目标元素上松开鼠标 */
    drop = (event) => {
        console.log('event', event);
        if (!this.selectImg)
            return;
        const { clientX, clientY } = event;
        const coordinate = this.scene.clientToCoord(clientX, clientY);
        const pattern = new Img({
            image: this.selectImg,
            position: coordinate,
            size: new Vector2(70, 50),
            offset: new Vector2(70, 50).multiplyScalar(-0.5)
        });
        this.scene.add(pattern);
        this.scene.render();
    };
    /**  放大 */
    zoomIn = () => {
        const { orbitControler, scene } = this;
        const scale = Math.pow(0.95, orbitControler.zoomSpeed);
        if (scene.camera.zoom > orbitControler.maxZoom)
            return;
        scene.camera.zoom /= scale;
        this.orbitControler.setZoom();
        this.scene.render();
    };
    /** 缩小 */
    zoomOut = () => {
        const { orbitControler, scene } = this;
        const scale = Math.pow(0.95, orbitControler.zoomSpeed);
        if (scene.camera.zoom < orbitControler.minZoom)
            return;
        scene.camera.zoom *= scale;
        this.orbitControler.setZoom();
        this.scene.render();
    };
    listen() {
        /* 滑动滚轮缩放 */
        this.domElement.addEventListener('wheel', this.wheel, {
            passive: false
        });
        /* 按住左键平移 */
        this.domElement.addEventListener('pointerdown', this.pointerdown);
        this.domElement.addEventListener('pointermove', this.pointermove);
        window.addEventListener('pointerup', this.pointerup);
        // 鼠标划出canvas时 重置状态
        this.domElement.addEventListener('mouseout', this.mouseout);
        window.addEventListener('resize', this.resize);
    }
    destroy() {
        /* 滑动滚轮缩放 */
        this.domElement.removeEventListener('wheel', this.wheel);
        /* 按住左键平移 */
        this.domElement.removeEventListener('pointerdown', this.pointerdown);
        this.domElement.removeEventListener('pointermove', this.pointermove);
        window.removeEventListener('pointerup', this.pointerup);
        // 鼠标划出canvas时 重置状态
        this.domElement.removeEventListener('mouseout', this.mouseout);
        window.removeEventListener('resize', this.resize);
    }
}
