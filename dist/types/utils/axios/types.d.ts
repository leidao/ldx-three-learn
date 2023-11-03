export declare type dFn = () => void;
export interface ResponseProps<T> {
    data: T;
    code?: number;
    status?: number;
    message?: string;
}
