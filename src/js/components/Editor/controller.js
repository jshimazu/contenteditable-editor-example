/**
 * Editor Controller
 */
import { Component } from 'react';
import style from './controller.css';

export default class extends Component {
    render() {
        return (
            <div className={`${style.wrapper}`}>
                <i className={`fa fa-header`}></i>
                <i className={`fa fa-quote-left`}></i>
                <i className={`fa fa-magic`}></i>
            </div>
        );
    }
}
