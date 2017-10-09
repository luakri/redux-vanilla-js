export const defineAction = (moduleName = 'module') => {
    return function set(actionName = 'action') {
        return moduleName + ':' + actionName;
    };
};

export const createAction = (type = 'action') => {
    return function actionCreator(...args) {
        return {type, payload: args};
    };
};

export const createReducer = (cases, defaultState) => {
    defaultState = {defaultState} || {};
    return function reducer( state, action ) {
        action = action || {};
        if (state === undefined) {
            return defaultState;
        }
        for (let caseName in cases) {
            if (action.type === caseName) {
                return cases[caseName](state, action);
            }
        }
        return state;
    };
};
