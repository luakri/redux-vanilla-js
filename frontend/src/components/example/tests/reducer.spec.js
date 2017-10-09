import assign from 'object-assign';
import component from '../component';
import {ASYNC_CALL_START, ASYNC_CALL_SUCCESS, ASYNC_CALL_ERROR} from '../action-types';

const {reducer, initialState} = component;

describe('# Example Reducer Scenario', function() {

    it('should return the initial state', function() {
        expect(reducer(undefined, {})).to.deep.equal({defaultState: initialState});
    });

    it('should handle async call start', function() {
        const state = assign({}, initialState);
        const expectedState = assign({}, state, {connecting: true, success: false, error: false});
        const reduce = reducer(state, {type: ASYNC_CALL_START});

        expect(reduce).to.deep.equal(expectedState);
    });

    it('should handle async call error', function() {
        const state = assign({}, initialState);
        const expectedState = assign({}, state, {connecting: false, error: true});
        const reduce = reducer(state, {type: ASYNC_CALL_ERROR});

        expect(reduce).to.deep.equal(expectedState);
    });

    it('should handle async call success', function() {
        const state = assign({}, initialState);
        const expectedState = assign({}, state, {connecting: false, success: true}, {data: {verified: true}});
        const reduce = reducer(state, {type: ASYNC_CALL_SUCCESS, payload: [{data: {verified: true}}]});

        expect(reduce).to.deep.equal(expectedState);
    });
});
