/* eslint-disable no-param-reassign */
import axios from 'axios';
import xRequestId from '@/utils/x-request-id';
// import {Env} from './getEnv'
// import Message from '../components/message/index';

/**
 * @description 由于不同业务的服务端接口标准不统一，对于服务异常响应处理方式存在多种，难以明确定义，所以账号系统、开放平台相关的
 * 请求层不统一处理异常和其他网络状态，交由saga 应用异步转发层进行处理。
 * @param baseUrl
 */
export default function requestCreater(baseUrl: string) {
    const service = axios.create({
        /**
         * baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
         * 此次考虑使用
         */
        baseURL: baseUrl,
        timeout: 15000,
        // withCredentials: true // send cookies when cross-domain requests
    });

    // Request interceptors
    service.interceptors.request.use(
        (config: any) => {
            config.headers['X-request-id'] = xRequestId();
            // config.headers.app_name = 'com.huami.webapp';
            // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
            return config;
        },
        (error) => {
            Promise.reject(error);
        },
    );

    // Response interceptors
    service.interceptors.response.use(
        (response) => {
            // Some example codes here:
            // 200	成功
            // 400	错误请求：参数错误，缺少参数、参数格式错误
            // 401	拒绝访问：授权失败、授权过期、Token过期
            // 403	拒绝访问：无访问权限
            // 404	未找到：访问的资源未找到
            // 409	资源冲突
            // 500	服务内部错误
            // Some example codes here:
            // code == -1001	Error parameter
            // code == -1002	Missing required parameter
            // code == -1003	Internal server error
            // code == -1004	Invalid parameter
            // code == -1005	Invalid date format, should be yyyy-MM-dd
            // code == -1006	date span can't more than 7 days
            // code == -1007	only can query the latest 31 days of data

            // const res = response.data;
            // if (response.status !== 200 && res.code) {
            //     let errorMessage = 'Something wrong @ Back End, retry?';
            //     switch (response.status) {
            //         case 404:
            //             return response;
            //         case 400:
            //         case 401:
            //         case 403:
            //         case 409:
            //             errorMessage = 'Something wrong, retry?';
            //             break;
            //         case 500:
            //         case 503:
            //             errorMessage = 'Something wrong @ Back End, retry?';
            //             break;
            //         default:
            //     }

            //     switch (res.code) {
            //         case 1001:
            //         case 1002:
            //         case 1003:
            //         case 1004:
            //             errorMessage = res.message;
            //             break;
            //         default:
            //     }
            //     Message({
            //         message: errorMessage,
            //         type: 'error',
            //         duration: 2 * 1000,
            //     });
            //     // return Promise.reject(new Error(res.message || 'Error'));
            // }
            return response;
        },
        (error) => {
            // console.log('网络报错：', error);
            // Message({
            //     message: error.message,
            //     type: 'error',
            //     duration: 2 * 1000,
            // });
            // 为什么要这样处理?因为部分的业务接口可能使用网络状态码,来表示业务状态.比如查询用户不存在,返回400错误等等
            return Promise.resolve(error.response || {});
        },
    );
    return service;
}
