const actionsCreater = (type: string, payload?: any) => {
    return {
        type,
        payload,
    };
};

export default actionsCreater;
