/* eslint-disable no-nested-ternary */
/**
 * @name 全局半透明Toast
 * @description 用于接口提示、错误提示等场景
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';

import ErrorPng from './img/error.png';
import LoadingPng from './img/loading.png';
import SuccessPng from './img/success.png';

export function Loading(props: { type: string; message: string; destory: () => void }) {
    const { type, message = '', destory } = props;
    return (
        <div
            id="customToast202412"
            className={`toast-mask ${type}-mask`}
            onClick={() => {
                destory();
            }}
        >
            <div className="toast-outter">
                {type === 'loading' ? (
                    <div className="toast-wrap">
                        <img src={LoadingPng} />
                    </div>
                ) : type === 'error' ? (
                    <div className="toast-wrap">
                        <img src={ErrorPng} />
                    </div>
                ) : type === 'success' ? (
                    <div className="toast-wrap">
                        <img src={SuccessPng} />
                    </div>
                ) : null}
                {message ? <div className="toast-text">{message}</div> : null}
            </div>
        </div>
    );
}

/**
 * @name 全局提示框的包装器
 * @param 见参数定义
 */
export default function Toast(props: {
    message: string;
    type?: 'loading' | 'error' | 'success' | 'prompt';
    duration?: number;
}): any {
    const { message, type = 'prompt', duration = 2000 } = props;
    // 挂载点
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'custom-toast-node');
    document.body.appendChild(divElement);
    const destory = () => {
        // document.querySelector('#customToast202412')?.remove();
        document.body.removeChild(divElement);
    };
    // 全局组件渲染器
    ReactDOM.render(<Loading type={type} message={message} destory={destory} />, divElement);

    if (duration) {
        setTimeout(() => {
            destory();
        }, duration);
    }

    return {
        destory,
    };
}
