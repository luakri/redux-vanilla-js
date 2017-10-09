import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [
    thunk
];

const configureStore = (allReducers = {}, initialState = {}) => {
    const reducers = combineReducers(allReducers);

    return createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );
};

export default configureStore;
export * from './connect';
