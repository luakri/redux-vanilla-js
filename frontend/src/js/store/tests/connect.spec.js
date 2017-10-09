import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as connect from '../connect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('# Connect Scenario', function() {

    it('should handle store example is active', function() {
        const store1 = mockStore({example: {isActive: false}});
        const store2 = mockStore({example: {isActive: true}});

        expect(connect.isExampleActive(store1)).to.be.false;
        expect(connect.isExampleActive(store2)).to.be.true;
    });

    it('should handle store example is connecting', function() {
        const store1 = mockStore({example: {connecting: false}});
        const store2 = mockStore({example: {connecting: true}});

        expect(connect.isExampleConnecting(store1)).to.be.false;
        expect(connect.isExampleConnecting(store2)).to.be.true;
    });

    it('should handle store example success', function() {
        const store1 = mockStore({example: {success: false}});
        const store2 = mockStore({example: {success: true}});

        expect(connect.isExampleSuccess(store1)).to.be.false;
        expect(connect.isExampleSuccess(store2)).to.be.true;
    });

    it('should handle store example error', function() {
        const store1 = mockStore({example: {error: false}});
        const store2 = mockStore({example: {error: true}});

        expect(connect.isExampleError(store1)).to.be.false;
        expect(connect.isExampleError(store2)).to.be.true;
    });

    it('should handle store example data', function() {
        const expected1 = {verified: true};
        const expected2 = 100;

        const store1 = mockStore({example: {data: expected1}});
        const store2 = mockStore({example: {data: expected2}});

        expect(connect.getExampleData(store1)).to.deep.equal(expected1);
        expect(connect.getExampleData(store2)).to.equal(expected2);
    });
});
