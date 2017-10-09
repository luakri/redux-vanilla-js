import $ from 'jquery';
import {initialiseComponents} from '../initialise';

const templateMock1 = `<div><div class="component" data-component-name="mock"></div></div>`;

const templateMock2 = `<div>
<div class="component" data-component-name="mock1"></div>
<div class="component" data-component-name="mock2"></div>
</div>`;

const templateMock3 = `
<div class="component component-defer" data-component-name="mock1"></div>
<div class="component" data-component-name="mock2"></div>
<div class="comp" data-component-name="mock3"></div>
<div class="component" data-component-name="mock4"></div>
`;

describe('# Initialise Scenario', function() {

    it('should initialise 1 component per container', function() {
        const $mock = $(templateMock1);

        let called = false;

        const mockComponents = {mock: function() {
            called = true;
        }};

        const spy = sinon.spy(mockComponents, 'mock');

        initialiseComponents($mock, null, mockComponents);

        expect(spy.called).to.be.true;
        expect(called).to.be.true;

        const args = spy.getCall(0).args[0];

        expect($(args).data('component-name')).to.equal('mock');
    });

    it('should initialise 2 component per container', function() {
        const $mock = $(templateMock2);

        let called1 = false;
        let called2 = false;

        const mockComponents = {
            mock1: function() { called1 = true;},
            mock2: function() { called2 = true;}
        };

        const spy1 = sinon.spy(mockComponents, 'mock1');
        const spy2 = sinon.spy(mockComponents, 'mock2');

        initialiseComponents($mock, null, mockComponents);

        expect(spy1.called).to.be.true;
        expect(spy2.called).to.be.true;

        expect(called1).to.be.true;
        expect(called2).to.be.true;

        const args1 = spy1.getCall(0).args[0];
        const args2 = spy2.getCall(0).args[0];

        expect($(args1).data('component-name')).to.equal('mock1');
        expect($(args2).data('component-name')).to.equal('mock2');
    });

    it('should initialise components per filtering', function() {
        const $mock = $(templateMock3);

        let called1 = false;
        let called2 = false;
        let called4 = false;

        const mockComponents = {
            mock1: function() {called1 = true;},
            mock2: function() {called2 = true;},
            mock4: function() {called4 = true;}
        };

        const spy1 = sinon.spy(mockComponents, 'mock1');
        const spy2 = sinon.spy(mockComponents, 'mock2');
        const spy4 = sinon.spy(mockComponents, 'mock4');

        initialiseComponents(null, $mock, mockComponents);

        expect(called1).to.be.false;
        expect(called2).to.be.true;
        expect(called4).to.be.true;

        const args1 = spy1.getCall(0);
        const args2 = spy2.getCall(0).args[0];
        const args4 = spy4.getCall(0).args[0];

        expect(args1).to.be.null;
        expect($(args2).data('component-name')).to.equal('mock2');
        expect($(args4).data('component-name')).to.equal('mock4');
    });
});
