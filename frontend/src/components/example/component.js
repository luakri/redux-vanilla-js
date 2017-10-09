import {createReducer} from '../../js/utils/redux-helper';
import view from './view';
import assign from 'object-assign';
import {ASYNC_CALL_START, ASYNC_CALL_SUCCESS, ASYNC_CALL_ERROR} from './action-types';
import {NAME} from './settings';

const initialState = {
    connecting: false,
    success: false,
    error: false,
    data: {}
};

const reducer = createReducer({
    [ASYNC_CALL_START]: function(state) {
        let newState = assign({}, state, {connecting: true, success: false, error: false});
        return newState;
    },
    [ASYNC_CALL_ERROR]: function(state) {
        let newState = assign({}, state, {connecting: false, error: true});
        return newState;
    },
    [ASYNC_CALL_SUCCESS]: function(state, action) {
        let newState = assign({}, state, {connecting: false, success: true}, ...action.payload);
        return newState;
    }
}, initialState);

export default {
    name: NAME,
    view,
    initialState,
    reducer
};
