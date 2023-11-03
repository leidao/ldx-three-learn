import React from 'react';
export declare const routes: ({
    path: string;
    key: string;
    component: React.LazyExoticComponent<() => JSX.Element>;
    icon: string;
    title: string;
    hideInMenu: boolean;
    auth: never[];
} | {
    path: string;
    key: string;
    component: React.LazyExoticComponent<React.FC<{}>>;
    icon?: undefined;
    title?: undefined;
    hideInMenu?: undefined;
    auth?: undefined;
})[];
declare const _default: ({
    path: string;
    key: string;
    component: React.LazyExoticComponent<() => JSX.Element>;
    icon: any;
    title: string;
    hideInMenu: boolean;
    auth: never[];
} | {
    path: string;
    key: string;
    component: () => JSX.Element;
    routes: ({
        path: string;
        key: string;
        component: React.LazyExoticComponent<() => JSX.Element>;
        icon: string;
        title: string;
        hideInMenu: boolean;
        auth: never[];
    } | {
        path: string;
        key: string;
        component: React.LazyExoticComponent<React.FC<{}>>;
        icon?: undefined;
        title?: undefined;
        hideInMenu?: undefined;
        auth?: undefined;
    })[];
})[];
export default _default;
export interface RoutesType {
    path: string;
    redirect?: string;
    key: string;
    component?: any;
    hideInMenu?: boolean;
    icon?: string;
    title?: string;
    auth?: string[];
    routes?: RoutesType[];
}
