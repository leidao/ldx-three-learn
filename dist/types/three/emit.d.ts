export declare class Emit {
    eventBus: import("mitt").Emitter<Record<import("mitt").EventType, unknown>>;
    on(event: string, callback: (...args: any) => void): void;
    off(event: string, callback: () => void): void;
    emit(event: string, ...args: any): void;
}
