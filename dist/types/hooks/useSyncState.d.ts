export declare const useSyncState: <T>(initState?: T | undefined) => [{
    current: T;
}, (data: T) => void];
