/* eslint-disable no-param-reassign */
// import moment from 'moment';
import ACTIONS_TYPE from '../actionTypes';

export interface TpaStateType {
    projectName: any;
}

export const initialState: TpaStateType = {
    projectName: '',
};

export default (state: TpaStateType = initialState, action: any): TpaStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.set_project_name: {
            state.projectName = action.payload;
            break;
        }
        default:
    }
    return { ...state };
};
