/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    const src: string;
    export default src;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.json' {
    const value: any;
    export default value;
}

declare namespace API {
    export interface Callback {
        (err: Error | null | undefined, data?: any): void;
    }
}

// declare global {
//     interface Window {
//         localeLang:any
//     }
// }
declare module '@loadable/component';

declare module 'better-picker';

interface Window {
    localeLang: any;
    getLocaleLanguage: any;
    ActiveXObject: any;
    HM: any;
    VConsole: any;
    HM_Analytics: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
    android: any;
    webkit: any;
    ApiConfig: any;
    KeepAlive: any;
}

interface Parameter {
    url: string;
    callback: Callback;
    parameters?: any;
    method?: string;
}

interface Callback {
    (err: Error | string | number | null | undefined, data?: any): void;
}

interface ActionType {
    type: string;
    payload: any;
}

// interface HMType {
//     HM: any;
// }

// export type ActionTypes = ActionType;

declare const VCode: {
    new (dom: any): any;
    // new(dom: any): HTMLImageElement;
};
