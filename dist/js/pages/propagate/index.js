import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Description: 孔子学院全球传播
 * @Author: ldx
 * @Date: 2023-11-03 23:33:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 20:58:05
 */
import { useEffect, useRef } from 'react';
import Viewer from '@/three';
import { Game } from './game';
// import { useEffect } from 'react'
const Propagate = () => {
    const ref = useRef(null);
    useEffect(() => {
        if (!ref.current)
            return;
        const viewer = new Viewer(ref.current);
        viewer.useOrbitControls();
        viewer.listen();
        // viewer.controls.enableRotate = false
        // viewer.controls.minDistance = 50 // 最小距离
        // viewer.controls.maxDistance = 200 // 最大距离
        // viewer.controls.mouseButtons = {
        //   LEFT: THREE.MOUSE.PAN,
        //   MIDDLE: THREE.MOUSE.DOLLY,
        //   RIGHT: THREE.MOUSE.ROTATE
        // }
        const game = new Game(viewer);
        game.startGame();
        let id;
        const animation = () => {
            game.update();
            id = requestAnimationFrame(animation);
        };
        animation();
        return () => {
            cancelIdleCallback(id);
        };
    }, []);
    return (_jsx("div", { className: "w-100% h-100% relative", children: _jsx("div", { className: "gunplay w-100% h-100%", ref: ref }) }));
};
export default Propagate;
