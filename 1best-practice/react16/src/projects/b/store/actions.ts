import actionsCreater from '@/utils/actionsCreater';
import ACTIONS_TYPE from './actionTypes';

export default {
    set_project_name: (payload?: any) => {
        return actionsCreater(ACTIONS_TYPE.set_project_name, payload);
    },
};
