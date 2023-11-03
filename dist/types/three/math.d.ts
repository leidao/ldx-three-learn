/** 经纬度转球面坐标 */
export declare const lon2xyz: (radius: number, lng: number, lat: number) => {
    x: number;
    y: number;
    z: number;
};
/** three坐标转换屏幕坐标 */
export declare const threeToScreen: (camera: THREE.PerspectiveCamera, container: HTMLDivElement, vector: THREE.Vector3) => {
    x: number;
    y: number;
};
