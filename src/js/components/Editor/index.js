import { Component } from 'react';
import style from './style.css';
console.log(style);

export default class extends Component {
    render() {
        return (
            <div>
                <div className={style.test} contentEditable="true">hogehogehoge</div>
            </div>
        );
    }
}
