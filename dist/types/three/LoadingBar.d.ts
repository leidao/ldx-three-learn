declare class LoadingBar {
    domElement: HTMLElement;
    text: HTMLElement;
    assets: Map<any, {
        loaded: number;
        total: number;
    }>;
    constructor();
    set visible(value: boolean);
    get total(): number;
    get loaded(): boolean;
    update(assets: Map<string, any>, loaded: number, total: number): void;
}
export { LoadingBar };
