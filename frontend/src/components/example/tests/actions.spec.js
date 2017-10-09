import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {ASYNC_CALL_START, ASYNC_CALL_SUCCESS, ASYNC_CALL_ERROR} from '../action-types';
import {asyncCallStart, asyncCallSuccess, asyncCallError, createAsyncCall} from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('# Example Actions Scenario', function() {

    let clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        clock.restore();
    });

    it('should create action for async call start', function() {
        const expectedAction = {
            type: ASYNC_CALL_START,
            payload: []
        };

        expect(asyncCallStart()).to.deep.equal(expectedAction);
    });

    it('should create action for async call success', function() {
        const expectedAction = {
            type: ASYNC_CALL_SUCCESS,
            payload: [{verified: true}]
        };

        expect(asyncCallSuccess({verified: true})).to.deep.equal(expectedAction);
    });

    it('should create action for async call error', function() {
        const expectedAction = {
            type: ASYNC_CALL_ERROR,
            payload: [{verified: false}]
        };

        expect(asyncCallError({verified: false})).to.deep.equal(expectedAction);
    });

    it('should create async action and resolve it', function() {
        const store = mockStore({'example': {'data': {}}});

        const expectedActions = [
            {'type': ASYNC_CALL_START,'payload':[]},
            {'type': ASYNC_CALL_SUCCESS,'payload':[{'data':{'verified':true}}]}
        ];

        const promise = store.dispatch(createAsyncCall({ok: true})).then(() => {
            expect(store.getActions()).to.deep.equal(expectedActions);
        });

        clock.tick(1100);

        return promise;
    });

    it('should create async action and reject it', function() {
        const store = mockStore({'example': {'data': {}}});

        const expectedActions = [
            {'type': ASYNC_CALL_START,'payload':[]},
            {'type': ASYNC_CALL_ERROR,'payload':[{'data':{'verified':false}}]}
        ];

        const promise = store.dispatch(createAsyncCall({ok: false})).then(null, () => {
            expect(store.getActions()).to.deep.equal(expectedActions);
        });

        clock.tick(1100);

        return promise;
    });
});
