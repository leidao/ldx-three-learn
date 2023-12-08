export declare class Matrix3 {
    elements: number[];
    set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): this;
    identity(): this;
    copy(m: Matrix3): this;
    setFromMatrix4(m: Matrix3): this;
    /** 将当前矩阵乘以矩阵m。 */
    multiply(m: Matrix3): this;
    /** 将矩阵m乘以当前矩阵。 */
    premultiply(m: Matrix3): this;
    /** 设置当前矩阵为矩阵a x 矩阵b。 */
    multiplyMatrices(a: Matrix3, b: Matrix3): this;
    /** 当前矩阵所有的元素乘以该缩放值s */
    multiplyScalar(s: number): this;
    /** 计算并返回矩阵的行列式 */
    determinant(): number;
    /** 计算当前矩阵的逆 */
    invert(): this;
    /** 将该矩阵转置 */
    transpose(): this;
    transposeIntoArray(r: number[]): this;
    setUvTransform(tx: number, ty: number, sx: number, sy: number, rotation: number, cx: number, cy: number): this;
    /** 当前矩阵乘以缩放矩阵 */
    scale(sx: number, sy: number): this;
    /** 当前矩阵乘以旋转矩阵 */
    rotate(theta: number): this;
    /** 当前矩阵乘以位移矩阵 */
    translate(tx: number, ty: number): this;
    /** 设置位移变换 */
    makeTranslation(x: number, y: number): this;
    /** 绕z轴（默认）旋转，参数为弧度 */
    makeRotation(theta: number): this;
    /** 设置缩放 */
    makeScale(x: number, y: number): this;
    /** 判断矩阵是否相等 */
    equals(matrix: Matrix3): boolean;
    /** 矩阵转数组 */
    fromArray(array: number[], offset?: number): this;
    /** 克隆矩阵 */
    clone(): Matrix3;
}
