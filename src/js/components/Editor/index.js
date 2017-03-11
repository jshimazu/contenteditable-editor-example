import { Component } from 'react';
import style from './index.css';
import Navi from './navi.js';
import Controller from './controller.js';
import InputField from './input-field.js';
import EditorStructure from '../../lib/editor-structure.js';

export default class extends Component {
    example = {
        body: [
            {
                type: "h1",
                content: "adsfasdfasdf",
            },
            {
                type: "text",
                content: "adsfasdfasdf",
            },
            {
                type: "text",
                content: "asdfasdfasdfasdf"
            },
            {
                type: "list",
                content: "asdfasdfasdfasdf",
            },
            {
                type: "list",
                content: "asdfasdfadsfjk",
            },
        ]
    }

    state = {
        inputFieldState: {
            currentX: 0,
            currentY: 0, 
            isHeading: false,
            isHighlight: false,
            isQuote: false,
            headingKind: false,
        }
    }

    constructor() {
        super();
        this.structure = new EditorStructure();
    }

    updateStructure = (html) => {
        this.structure.update(html);
    }

    setType = (type) => {
    }

    render() {
        return (
            <div>
                <Navi />
                <InputField updateStructure={this.updateStructure} />
                <Controller setType={this.setType} />
            </div>
        );
    }
}
