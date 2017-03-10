import React from 'react';
import { render } from 'react-dom';
import Editor from './components/Editor';
window.React = React;
console.log(document.getElementById('root'));

render(
    <Editor />,
    document.getElementById('root'),
);
