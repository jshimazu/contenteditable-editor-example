import React from 'react';
import { render } from 'react-dom';
import Editor from './containers/Editor';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
require('./lib/fixContentEditableError');
window.React = React;

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Editor />
    </Provider>,
    document.getElementById('root'),
);
