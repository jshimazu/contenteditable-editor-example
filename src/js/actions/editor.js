import { ACTION_TYPE } from '../constants/editor';
console.log(ACTION_TYPE.CHANGE_HTML);

export const changeDecorateType = decorateType => ({ type: ACTION_TYPE.CHANGE_DECORATE_TYPE, decorateType })
export const changeHTML = html => ({ type: ACTION_TYPE.CHANGE_HTML, html });
