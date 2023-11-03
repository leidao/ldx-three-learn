/*
 * @Description: 辅助函数
 * @Author: ldx
 * @Date: 2023-10-26 10:41:35
 * @LastEditors: ldx
 * @LastEditTime: 2023-10-28 11:49:24
 */
/** 经纬度转球面坐标 */
export const lon2xyz = (radius, lng, lat) => {
    const phi = (180 + lng) * (Math.PI / 180);
    const theta = (90 - lat) * (Math.PI / 180);
    return {
        x: -radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.cos(theta),
        z: radius * Math.sin(theta) * Math.sin(phi)
    };
};
/** three坐标转换屏幕坐标 */
export const threeToScreen = (camera, container, vector) => {
    // left, top 表示canvas画布相对body左右偏移量:像素
    // width,height 表示canvas画布的宽高
    const { left, top, width, height } = container.getBoundingClientRect();
    // standardVector是标准设备坐标
    const w = width / 2;
    const h = height / 2;
    const standardVector = vector.clone().project(camera);
    //标准设备坐标转屏幕坐标
    const x = Math.round(standardVector.x * w + w) + left;
    const y = Math.round(-standardVector.y * h + h) + top;
    return {
        x,
        y
    };
};
