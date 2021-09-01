import actionsCreater from '@/utils/actionsCreater';
import ACTIONS_TYPE from '../actionTypes/module2';

export default {
    setName: (payload?: string) => {
        return actionsCreater(ACTIONS_TYPE.setName, payload);
    },
};
