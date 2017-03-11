/**
 * Editor Navigation
 */
import { Component } from 'react';
import style from './navi.css';

export default class extends Component {
    render() {
        return (
            <div className={`${style.wrapper} clearfix`}>
                <div className={style.back}>
                    <i className={`fa fa-angle-left`}></i>
                </div>
                <div className={style.submit}>
                    <i className={`fa fa-edit`}></i>
                </div>
            </div>
        );
    }
}
