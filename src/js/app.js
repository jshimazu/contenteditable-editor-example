import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createBrowserHistory } from 'history'; // TODO
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

// components
import Index from './components/Index';
import Editor from './containers/Editor';
import EditorQuill from './components/EditorQuill';

// 暫定処置
require('./lib/fixContentEditableError');
window.React = React;

const store = createStore(reducer);
const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={Index} />
                <Route path="/editor-scratch" component={Editor} />
                <Route path="/editor-quill" component={EditorQuill} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
