import $ from 'jquery';
import assign from 'object-assign';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import View from '../view';
import {ASYNC_CALL_START as TYPE_ASYNC_CALL_START} from '../action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const templateMock = `<div class="component" data-component-name="mock1">
<button class="btn"></button>
</div>`;

const initialState = {
    connecting: false,
    success: false,
    error: false,
    data: {}
};

describe('# Example View Scenario', function() {

    let view = null;

    afterEach(() => {
        if (view) {
            view.destroy();
        }
    });

    it('should have default properties', function() {
        const $sandbox = $(templateMock);
        const store = mockStore({example: initialState});

        view = new View($sandbox, store);

        expect(typeof view).to.equal('object');
        expect(typeof view.manageLayout).to.equal('function');
        expect(typeof view.onClick).to.equal('function');
    });

    it('should handle action dispatch', function() {
        const $sandbox = $(templateMock);
        const store = mockStore({example: initialState});
        view = new View($sandbox, store);

        view.onClick();

        const actions = store.getActions();
        const expected = [{'type':TYPE_ASYNC_CALL_START,'payload':[]}];

        expect(actions).to.deep.equal(expected);
    });

    it('should manage layout connecting based on store', function() {
        const $sandbox = $(templateMock);
        const state = assign({}, initialState, {connecting: true});
        const store = mockStore({example: state});
        view = new View($sandbox, store);

        expect($sandbox.find('.btn').hasClass('connecting')).to.be.true;
    });

    it('should manage layout connected based on store', function() {
        const $sandbox = $(templateMock);
        const state = assign({}, initialState, {success: true});
        const store = mockStore({example: state});
        view = new View($sandbox, store);

        expect($sandbox.find('.btn').hasClass('success')).to.be.true;
    });
});
