export declare type CustomEvent = {
    type: string;
    target?: any;
    [attachment: string]: any;
};
export declare type EventListener = (event: CustomEvent) => void;
export declare class EventDispatcher {
    _listeners: any;
    addEventListener(type: string, listener: EventListener): void;
    hasEventListener(type: string, listener: EventListener): boolean;
    removeEventListener(type: string, listener: EventListener): void;
    dispatchEvent(event: CustomEvent): void;
}
