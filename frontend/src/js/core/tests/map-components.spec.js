import mapComponents from '../map-components';

describe('# Map Components Scenario', function() {

    it('should have default method', function() {
        expect(typeof mapComponents).to.equal('function');
    });

    it('should not map empty input', function() {
        const mock = {};

        const map = mapComponents(mock);

        expect(Object.keys(map.view).length).to.equal(0);
        expect(Object.keys(map.reducers).length).to.equal(0);
        expect(Object.keys(map.initialState).length).to.equal(0);
    });

    it('should not map component without a name', function() {
        const mock = {a: {view: {}, reducer: {}, initialState: {}}};

        const map = mapComponents(mock);

        expect(Object.keys(map.view).length).to.equal(0);
        expect(Object.keys(map.reducers).length).to.equal(0);
        expect(Object.keys(map.initialState).length).to.equal(0);
    });

    it('should map components', function() {
        const mock = {a: {name: 'mock', view: {}, reducer: {}, initialState: {}}};

        const map = mapComponents(mock);

        expect(Object.keys(map.view).length).to.equal(1);
        expect(Object.keys(map.reducers).length).to.equal(1);
        expect(Object.keys(map.initialState).length).to.equal(1);

        expect(map.view['mock']).to.not.equal(null);
        expect(map.reducers['mock']).to.not.equal(null);
        expect(map.initialState['mock']).to.not.equal(null);
    });

    it('should map different components', function() {
        const mock = {
            a: {name: 'mock1', view: {}, initialState: {}},
            b: {name: 'mock2', view: {}, reducer: {}}
        };

        const map = mapComponents(mock);

        expect(Object.keys(map.view).length).to.equal(2);
        expect(Object.keys(map.reducers).length).to.equal(1);
        expect(Object.keys(map.initialState).length).to.equal(1);

        expect(map.view['mock1']).to.not.equal(null);
        expect(map.reducers['mock1']).to.be.undefined;
        expect(map.initialState['mock1']).to.not.equal(null);

        expect(map.view['mock2']).to.not.equal(null);
        expect(map.reducers['mock2']).to.not.equal(null);
        expect(map.initialState['mock2']).to.be.undefined;
    });
});
