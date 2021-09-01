/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createHashHistory } from 'history';

import module1Reducer from '@/store/reducer/module1';
import module2Reducer from '@/store/reducer/module2';
import aReducer from './reducer/b';

export const history = createHashHistory();

export default combineReducers({
    router: connectRouter(history),
    module1: module1Reducer,
    module2: module2Reducer,
    a: aReducer,
});
