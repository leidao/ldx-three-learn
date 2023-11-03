export interface ResponseProps {
    code?: number;
    status?: number;
    message?: string;
    [key: string]: any;
}
export declare type Mode = 'vertical' | 'horizontal';
export interface UserInfo {
    name: string;
}
