import assign from 'object-assign';
import {defineAction, createAction, createReducer} from '../redux-helper';

describe('# Redux Helper Scenario', function() {

    it('should handle defining an action with default values', function() {
        const actionMock1 = defineAction();
        const typeMock1 = actionMock1();
        const typeMock2 = actionMock1('mock');

        const expected1 = 'module:action';
        const expected2 = 'module:mock';

        expect(typeMock1).to.equal(expected1);
        expect(typeMock2).to.equal(expected2);
    });

    it('should handle defining an action types', function() {
        const actionMock1 = defineAction('mock');
        const typeMock1 = actionMock1('action1');
        const typeMock2 = actionMock1('action2');

        const expected1 = 'mock:action1';
        const expected2 = 'mock:action2';

        expect(typeMock1).to.equal(expected1);
        expect(typeMock2).to.equal(expected2);
    });

    it('should handle creating actions', function() {
        const actionMock1 = createAction('action-mock');
        const definedMock1 = actionMock1(true);

        const expected1 = {
            type: 'action-mock',
            payload: [true]
        };

        expect(definedMock1).to.deep.equal(expected1);
    });

    it('should handle creating actions with complex playload', function() {
        const actionMock1 = createAction('action-complex');
        const definedMock1 = actionMock1({defined: true});

        const expected1 = {
            type: 'action-complex',
            payload: [{defined: true}]
        };

        expect(definedMock1).to.deep.equal(expected1);
    });

    it('should handle creating reducers', function() {
        const initialState = {
            connecting: false
        };

        const reducer = createReducer({
            'MOCK1': function(state) {
                let newState = assign({}, state, {connecting: false});
                return newState;
            },
            'MOCK2': function(state) {
                let newState = assign({}, state, {connecting: true});
                return newState;
            }
        }, initialState);

        const mockReducer = reducer(initialState, {type: 'MOCK3'});

        const mockReducer2 = reducer(initialState, {type: 'MOCK2'});

        const mockReducer3 = reducer(undefined, {type: 'MOCK4'});

        expect(mockReducer).to.deep.equal(initialState);

        expect(mockReducer2.connecting).to.be.true;

        expect(mockReducer3).to.deep.equal({defaultState: initialState});
    });
});
