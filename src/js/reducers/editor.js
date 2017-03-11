import { ACTION_TYPE } from '../constants/editor';

const initialState = {
    decorateType: 'text',
    cursorX: 0,
    cursorY: 0,
    html: '',
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPE.CHANGE_HTML:
            return {
                ...state,
                html: action.html,
            }
        case ACTION_TYPE.CHANGE_DECORATE_TYPE:
            return {
                ...state,
                decorateType: action.decorateType,
            }
        default:
            return state;
    }
}
