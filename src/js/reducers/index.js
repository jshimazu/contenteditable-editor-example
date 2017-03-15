import { combineReducers } from 'redux';
import editor from './editor';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    editor,
    routing: routerReducer
});
