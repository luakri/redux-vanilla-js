import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import $ from 'jquery';
import assign from 'object-assign';
import View, {getStatus, getDataSuccess} from '../view';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const templateMock = `<div class="component" data-component-name="mock1"></div>`;

const initialState = {
    connecting: false,
    success: false,
    error: false,
    data: {}
};

describe('# Example 2 View Scenario', function() {

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
    });

    it('should handle status default value', function() {
        const store = mockStore({example: initialState});

        const status = getStatus(store);
        const expected = null;

        expect(status).to.equal(expected);
    });

    it('should handle status connecting', function() {
        const state = assign({}, initialState, {connecting: true});
        const store = mockStore({example: state});

        const status = getStatus(store);
        const expected = 'connecting';

        expect(status).to.equal(expected);
    });

    it('should handle status error', function() {
        const state = assign({}, initialState, {error: true});
        const store = mockStore({example: state});

        const status = getStatus(store);
        const expected = 'error';

        expect(status).to.equal(expected);
    });

    it('should handle status success', function() {
        const expectedSuccess = {verified: true};
        const state = assign({}, initialState, {success: true, data: expectedSuccess});
        const store = mockStore({example: state});

        const status = getStatus(store);
        const data = getDataSuccess(store);
        const expected = 'success';

        expect(status).to.equal(expected);
        expect(data).to.deep.equal(expectedSuccess);
    });
});
