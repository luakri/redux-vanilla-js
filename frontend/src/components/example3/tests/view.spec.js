import $ from 'jquery';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import View from '../view';
import {TOGGLE as TYPE_TOGGLE} from '../action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const templateMock = `<div class="component" data-component-name="mock1"></div>`;

const initialState = {
    isActive: false
};

describe('# Example3 View Scenario', function() {

    it('should have default properties', function() {
        const $sandbox = $(templateMock);
        const store = mockStore({example: initialState});
        const view = new View($sandbox, store);

        expect(typeof view).to.equal('object');
    });

    it('should dispatch action on constructor', function() {
        const $sandbox = $(templateMock);
        const store = mockStore({example: initialState});
        const view = new View($sandbox, store); // eslint-disable-line no-unused-vars

        const actions = store.getActions();
        const expected = [{'type':TYPE_TOGGLE,'payload':[{'ok': true}]}];

        expect(actions).to.deep.equal(expected);
    });
});
