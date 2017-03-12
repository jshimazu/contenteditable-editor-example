/**
 * Editor Input Field
 */
import { Component, PropTypes } from 'react';
import style from './style.css';
import ContentEditable from 'react-contenteditable';
import _ from 'lodash';

const THROTTLE_TIME = 1000;

export default class extends Component {
    static propTypes = {
        changeHTML: PropTypes.func.isRequired,
    };

    handleChangeDOM = (evt) => {
        // 間引き
        _.throttle(() => {
            const target = evt.target;
            const sel = window.getSelection();
            const x = sel.anchorOffset;
            const y = sel.focusOffset;
            //console.log(target.selectionStart);
            //console.log(sel);
            //console.log(x, y);
            const html = evt.target.value;
            this.props.changeHTML(html);
        }, THROTTLE_TIME)();
    }

    handleKeyup = (evt) => {
        //console.log("key up");
    }

    render() {
        return (
            <div className={style.wrapper}>
                {/*}
                <input type="text" className={style.title} placeholder="title" />
                {*/}
                <div className={style.titleWrapper}>
                    <ContentEditable
                        className={style.title}                    ref="title"
                    >
                    </ ContentEditable>
                </div>
                {/*}
                <div className={style.titleWrapper}>
                    <textarea className={style.title}></textarea>
                </div>
                {*/}
                <ContentEditable
                    ref="content"
                    className={style.content}
                    html={this.props.currentHTML}
                    disabled={false}
                    onChange={this.handleChangeDOM}
                    onKeyUp={this.handleKeyup}
                    onBlur={this.handleKeyup}
                    onFocus={this.handleKeyup}
                >
                </ContentEditable>
            </div>
        );
    }
}
