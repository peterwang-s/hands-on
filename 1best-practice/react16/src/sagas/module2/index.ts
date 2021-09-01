/* eslint-disable no-unneeded-ternary */
import { select } from 'redux-saga/effects';
import { fetchA } from '@/api/user';

/**
 * 登录请求逻辑
 * @param params
 */
export function* FetchModule1(): any {
    const {
        module2: { name },
    } = yield select();
    const tokenResponse = yield fetchA({
        name,
    });
    return tokenResponse;
}
