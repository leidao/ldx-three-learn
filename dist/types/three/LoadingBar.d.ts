declare class LoadingBar {
    domElement: HTMLElement;
    progressBar: HTMLElement;
    assets: {
        [key: string]: {
            loaded: number;
            total: number;
        };
    };
    constructor();
    set progress(delta: number);
    set visible(value: boolean);
    get loaded(): boolean;
    update(loaded: number, total: number): void;
}
export { LoadingBar };
