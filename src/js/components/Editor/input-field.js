/**
 * Editor Input Field
 */
import { Component } from 'react';
import style from './input-field.css';

export default class extends Component {
    render() {
        return (
            <div className={style.wrapper} contentEditable="true">input text here</div>
        );
    }
}
