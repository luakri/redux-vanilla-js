import {createReducer} from '../../js/utils/redux-helper';
import view from './view';
import assign from 'object-assign';
import {TOGGLE} from './action-types';
import {NAME} from './settings';

const initialState = {
    isActive: false
};

const reducer = createReducer({
    [TOGGLE]: function(state) {
        let newState = assign({}, state, {isActive: !state.isActive});
        return newState;
    }
}, initialState);

export default {
    name: NAME,
    view,
    initialState,
    reducer
};
