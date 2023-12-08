import { Object2D, Object2DType } from './object2D';
export declare class Group extends Object2D {
    children: Object2D[];
    readonly isGroup = true;
    constructor(attr?: Object2DType);
    setOption(attr: Object2DType): void;
    add(...objs: Object2D[]): this;
    remove(...objs: Object2D[]): this;
    clear(): this;
    sort(): void;
    getObjectByName(name: string): Object2D | undefined;
    getObjectByProperty<T>(name: string, value: T): Object2D | undefined;
    traverse(callback: (obj: Object2D) => void): void;
    traverseVisible(callback: (obj: Object2D) => void): void;
    drawShape(ctx: CanvasRenderingContext2D): void;
}
