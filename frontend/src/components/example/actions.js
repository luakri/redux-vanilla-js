import Promise from 'promise';
import {createAction} from '../../js/utils/redux-helper';
import {ASYNC_CALL_START, ASYNC_CALL_SUCCESS, ASYNC_CALL_ERROR} from './action-types';

export const asyncCallStart = createAction(ASYNC_CALL_START);
export const asyncCallSuccess = createAction(ASYNC_CALL_SUCCESS);
export const asyncCallError = createAction(ASYNC_CALL_ERROR);

const mockPromise = (options) => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if (options.ok) {
                resolve({data: {verified: true}});
            } else {
                reject({data: {verified: false}});
            }
        }, 1000);
    });
};

export const createAsyncCall = (options) => {
    return dispatch => {
        dispatch(asyncCallStart());
        return mockPromise({...options})
            .then(data => {
                dispatch(asyncCallSuccess(data));
            }).catch(data => {
                dispatch(asyncCallError(data));
                throw(data);
            });
    };
};
