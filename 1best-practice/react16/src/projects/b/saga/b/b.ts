/* eslint-disable no-unneeded-ternary */
import { select } from 'redux-saga/effects';
import { fetchA } from '@/api/user';

/**
 * 登录请求逻辑
 * @param params
 */
export function* FetchA(): any {
    const {
        a: { projectName },
    } = yield select();
    const tokenResponse = yield fetchA({
        name: projectName,
    });
    return tokenResponse;
}
