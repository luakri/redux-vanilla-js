import assign from 'object-assign';
import component from '../component';
import {TOGGLE as ACTION_TOGGLE} from '../action-types';

const {reducer, initialState} = component;

describe('# Example3 Reducer Scenario', function() {

    it('should return the initial state', function() {
        expect(reducer(undefined, {})).to.deep.equal({defaultState: initialState});
    });

    it('should handle toggle', function() {
        const state = assign({}, initialState);
        const expectedState = assign({}, state, {isActive: true});
        const reduce = reducer(state, {type: ACTION_TOGGLE});

        expect(reduce).to.deep.equal(expectedState);
    });
});
