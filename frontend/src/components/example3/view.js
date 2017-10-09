import {NAME} from './settings';
import {toggle} from './actions';

/**
 * Container Component.
 */
class Example3 {

    /**
     * Example3 constructor.
     *
     */
    constructor($sandbox, store) {
        console.log(`component ${NAME} initialised`);

        this.$sandbox = $sandbox;
        this.store = store;

        this.store.dispatch(toggle({ok: true}));
    }
}

export default Example3;
