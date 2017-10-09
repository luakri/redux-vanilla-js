import {defineAction} from '../../js/utils/redux-helper';
import {NAME} from './settings';

const actionType = defineAction(NAME);

export const TOGGLE = actionType('TOGGLE');
