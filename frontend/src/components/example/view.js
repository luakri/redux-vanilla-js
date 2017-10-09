import {NAME} from './settings';
import {createAsyncCall} from './actions';
import {isExampleConnecting, isExampleSuccess} from '../../js/store/store';

const BTN = '.btn';
const CONNECTING = 'connecting';
const SUCCESS = 'success';

/**
 * Container Component.
 */
class Example {

    /**
     * Example constructor.
     *
     */
    constructor($sandbox, store) {
        console.log(`component ${NAME} initialised`);

        this.$sandbox = $sandbox;
        this.store = store;

        this.init();
    }

    onClick = () => {
        if (!isExampleConnecting(this.store)) {
            this.store.dispatch(createAsyncCall({ok: true}));
        }
    }

    manageLayout = () => {
        this.$btn.removeClass(`${CONNECTING} ${SUCCESS}`);

        if (isExampleConnecting(this.store)) {
            this.$btn.addClass(CONNECTING);
        } else if (isExampleSuccess(this.store)) {
            this.$btn.addClass(SUCCESS);
        }
    }

    init() {
        this.$btn = this.$sandbox.find(BTN);

        this.$btn.on('click', this.onClick);

        this.manageLayout();

        this.subStore = this.store.subscribe(this.manageLayout);
    }

    destroy() {
        this.subStore();
        this.$btn.off('click');
    }
}

export default Example;
