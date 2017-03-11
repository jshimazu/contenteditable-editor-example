import React from 'react';
import { render } from 'react-dom';
import Editor from './components/Editor/index.js';
window.React = React;

render(
    <Editor />,
    document.getElementById('root'),
);
