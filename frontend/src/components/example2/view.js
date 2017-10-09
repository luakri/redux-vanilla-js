import {NAME} from './settings';
import {isExampleConnecting, isExampleSuccess, isExampleError, getExampleData} from '../../js/store/store';

const STATUS = '.status';
const RESULT = '.result';

export const getStatus = (store) => {
    let result = null;

    if (isExampleConnecting(store)) {
        result = 'connecting';
    } else if (isExampleSuccess(store)) {
        result = 'success';
    } else if (isExampleError(store)) {
        result = 'error';
    }

    return result;
};

export const getDataSuccess = (store) => {
    let result = null;

    if (isExampleSuccess(store)) {
        result = getExampleData(store);
    }

    return result;
};

/**
 * Presentation Component.
 */
class Example2 {

    /**
     * Example2 constructor.
     *
     */
    constructor($sandbox, store) {
        console.log(`component ${NAME} initialised`);

        this.$sandbox = $sandbox;
        this.store = store;

        this.init();
    }

    manageLayout = () => {
        const status = getStatus(this.store);
        const dataSuccess = getDataSuccess(this.store);

        if (status) {
            this.$result.empty();
            this.$status.text(status);
        }

        if (dataSuccess) {
            this.$result.text(JSON.stringify(dataSuccess));
        }
    }

    init() {
        this.$status = this.$sandbox.find(STATUS);
        this.$result = this.$sandbox.find(RESULT);

        this.manageLayout();

        this.subStore = this.store.subscribe(this.manageLayout);
    }

    destroy() {
        this.subStore();
    }
}

export default Example2;
