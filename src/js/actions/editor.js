import { ACTION_TYPE } from '../constants/editor';
console.log(ACTION_TYPE.CHANGE_HTML);

export const changeDecorateType = (decorateType) => {
    return (
        {
            type: ACTION_TYPE.CHANGE_DECORATE_TYPE,
            decorateType
        }
    )
};

export const changeHTML = (html) => {
    return (
        {
            type: ACTION_TYPE.CHANGE_HTML,
            html
        }
    )
};

