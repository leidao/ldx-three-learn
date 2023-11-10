import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * @Description: 星云轨道
 * @Author: ldx
 * @Date: 2023-11-07 23:33:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-10 15:12:56
 */
import { useEffect, useRef, useState } from 'react';
import 星球 from '/nebularOrbit/img/星球.png';
import Viewer from '@/three';
import { Game } from './game';
// import { useEffect } from 'react'
const Propagate = () => {
    const ref = useRef(null);
    const [text, setText] = useState();
    useEffect(() => {
        if (!ref.current)
            return;
        const viewer = new Viewer(ref.current);
        // viewer.listen()
        // viewer.useOrbitControls()
        viewer.on('point_click', (data) => {
            setText(data);
        });
        const game = new Game(viewer);
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
    return (_jsxs("div", { className: "w-100% h-100% relative", children: [_jsx("div", { className: "gunplay w-100% h-100%", ref: ref }), text?.time && (_jsxs("div", { className: "absolute left-40px top-20px z-999 text-#fff w-342px", children: [_jsx("div", { className: "text-36px border-b-2px pb-10px", children: text?.time }), _jsx("div", { className: "text-16px pt-14px max-h-500px overflow-auto font-normal", children: text?.description })] })), _jsx("div", { className: "mask fixed top--325px right--404px w-1291px h-1293px", style: {
                    backgroundImage: `url(${星球})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: '-100px -100px',
                    pointerEvents: 'none'
                } })] }));
};
export default Propagate;
