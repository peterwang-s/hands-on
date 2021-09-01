/* eslint-disable no-param-reassign */
// import Reducer from "redux";
// import { Provider, useSelector, useDispatch } from "react-redux";
// import {produce} from 'immer'
import ACTIONS_TYPE from '../actionTypes/module2';

export interface rootStateType {
    name: string;
}

export const initialState: rootStateType = {
    name: '',
};

export default (state = initialState, action: { type: string; payload?: any }): rootStateType => {
    const { payload } = action;
    switch (action.type) {
        case ACTIONS_TYPE.setName: {
            state.name = payload;
            break;
        }
        default:
    }
    return { ...state };
};
