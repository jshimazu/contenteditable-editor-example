import { Component } from 'react';
import style from './index.css';
import Navi from './navi.js';
import Controller from './controller.js';
import InputField from './input-field.js';
import EditorFilter from '../../lib/editor-filter.js';

export default class extends Component {
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
        this.filter = new EditorFilter();
    }

    setHTML = (html) => {
        this.filter.setHTML(html);
    }

    setType = (type) => {
        this.filter.setType(type);
    }

    setCursor = (x, y) => {
        this.filter.setCursor();
    }

    render() {
        return (
            <div>
                <Navi />
                <InputField filter={this.filter} />
                <Controller filter={this.filter} />
            </div>
        );
    }
}
