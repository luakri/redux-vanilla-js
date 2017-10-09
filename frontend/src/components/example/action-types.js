import {defineAction} from '../../js/utils/redux-helper';
import {NAME} from './settings';

const actionType = defineAction(NAME);

export const ASYNC_CALL_START = actionType('ASYNC_CALL_START');
export const ASYNC_CALL_SUCCESS = actionType('ASYNC_CALL_SUCCESS');
export const ASYNC_CALL_ERROR = actionType('ASYNC_CALL_ERROR');
