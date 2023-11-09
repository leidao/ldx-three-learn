import * as THREE from 'three';
export declare const lon2phi: (lng: number, lat: number) => {
    phi: number;
    theta: number;
};
/** 经纬度转球面坐标 */
export declare const lon2xyz: (radius: number, lng: number, lat: number) => {
    x: number;
    y: number;
    z: number;
};
/** 球面坐标转经纬度 */
export declare const xyz2lon: (x: number, y: number, z: number, radius: number) => {
    lat: number;
    lon: number;
};
/** three坐标转换屏幕坐标 */
export declare const threeToScreen: (camera: THREE.PerspectiveCamera, container: HTMLDivElement, vector: THREE.Vector3) => {
    x: number;
    y: number;
};
/** 根据三个点位获取外接圆的圆心坐标 */
export declare const threePointToCenter: (p1: THREE.Vector3, p2: THREE.Vector3, p3: THREE.Vector3) => THREE.Vector3;
/** 空间中任意两点旋转到XOY平面上 */
export declare const startEndQuaternion: (startSphere: THREE.Vector3, endSphere: THREE.Vector3) => {
    startSphere: THREE.Vector3;
    endSphere: THREE.Vector3;
    quaternion: THREE.Quaternion;
};
