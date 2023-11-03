import * as THREE from 'three';
export default class Music {
    camera: THREE.PerspectiveCamera;
    audioLoader: THREE.AudioLoader;
    manager: THREE.LoadingManager;
    sounds: {
        [key: string]: THREE.Audio;
    };
    constructor(camera: THREE.PerspectiveCamera, manager: THREE.LoadingManager);
    useAudioLoader(): void;
    loadMusic(name: string, path: string, loop?: boolean, volume?: number): void;
    /** 设置音量 */
    setVolume(name: string, volume: number): void;
    /** 设置循环 */
    setLoop(name: string, loop: boolean): void;
    /** 设置播放 */
    setPlay(name: string): void;
    /** 设置停止 */
    setStop(name: string): void;
    /** 设置停止所有 */
    setStopAll(): void;
    /** 暂停 */
    pause(name: string): void;
}
