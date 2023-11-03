import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * @Description: 飞机
 * @Author: ldx
 * @Date: 2023-11-03 23:33:27
 * @LastEditors: ldx
 * @LastEditTime: 2023-11-04 01:02:24
 */
import { SlackOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';
import Viewer from '@/three';
import { Game } from './game';
let game;
import planePic from './assets/img/plane-icon.png';
import starPic from './assets/img/star-icon.png';
// import { useEffect } from 'react'
const Home = () => {
    const [life, setLife] = useState(5);
    const [star, setStar] = useState(0);
    const [playing, setPlay] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        if (!ref.current)
            return;
        const viewer = new Viewer(ref.current);
        viewer.initScene();
        viewer.useOrbitControls();
        viewer.controls.enableZoom = false;
        viewer.listen();
        viewer.on('addStar', (num) => {
            setStar(num);
        });
        viewer.on('decLife', (num) => {
            setLife(num);
            if (num === 0) {
                setLife(5);
                setStar(0);
                setTimeout(() => {
                    game.gameOver();
                    setPlay(false);
                }, 600);
            }
        });
        game = new Game(viewer);
        const animation = () => {
            game.update();
            requestAnimationFrame(animation);
        };
        animation();
    }, []);
    const start = () => {
        setPlay(true);
        game.startGame();
    };
    return (_jsx("div", { className: "w-100% h-100% relative", children: _jsxs("div", { className: "gunplay w-100% h-100%", ref: ref, children: [_jsx("div", { className: "play absolute left-50% top-50% z-999 translate-x--50%", children: !playing && (_jsx(Button, { size: "large", icon: _jsx(SlackOutlined, {}), onClick: start, children: "Play" })) }), _jsxs("div", { className: "life absolute left-20px top-10px", children: [_jsx("img", { width: 100, height: 60, alt: "\u98DE\u673A", src: planePic }), _jsxs("span", { className: "text-26px text-#fff", children: [life, " "] })] }), _jsxs("div", { className: "star absolute right-20px top-10px", children: [_jsxs("span", { className: "text-26px text-#fff", children: [star, " "] }), _jsx("img", { width: 100, height: 70, src: starPic, alt: "\u661F\u661F" })] })] }) }));
};
export default Home;
