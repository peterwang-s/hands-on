import { takeEvery } from 'redux-saga/effects';
import SagaWrapper from '@/utils/sagaHelper';

import ACTIONS_TYPE_module1 from '@/store/actionTypes/module1';
import ACTIONS_TYPE from '@a/store/actionTypes';

import { FetchModule1 } from '@/sagas/module1';

import { FetchA } from './a/a';

export default function* () {
    yield takeEvery(ACTIONS_TYPE_module1.fetchModule1, SagaWrapper(FetchModule1));
    yield takeEvery(ACTIONS_TYPE.fetch_project_name, SagaWrapper(FetchA));
}
