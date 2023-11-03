import { AxiosRequestConfig } from 'axios';
import { ResponseProps } from './types';
interface Request {
    <T>(url: string, params?: Record<string, unknown>, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<ResponseProps<T>>;
}
declare const _default: {
    get: Request;
    post: Request;
    put: Request;
    delete: Request;
    request: (options: AxiosRequestConfig) => import("axios").AxiosPromise<any>;
};
export default _default;
