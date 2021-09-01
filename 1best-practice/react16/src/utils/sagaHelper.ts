import { put } from 'redux-saga/effects';

export default function SagaWrapper(Fun: (...arg: any) => any) {
    return function* (...arg: any) {
        try {
            yield Fun(...arg);
        } catch (error) {
            console.log(error);
            yield put({
                type: 'SAGA_ERROR',
                payload: {
                    errorCode: 'other',
                    errorMessage: JSON.stringify(error),
                },
            });
        }
    };
}
