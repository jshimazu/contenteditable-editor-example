/**
 * Editor Input Field
 */
import { Component, PropTypes } from 'react';
import style from './style.css';
import ContentEditable from 'react-contenteditable';

export default class extends Component {
    static propTypes = {
        changeHTML: PropTypes.func.isRequired,
    };

    handleChangeDOM = (evt) => {
        const target = evt.target;
        const sel = window.getSelection();
        const x = sel.anchorOffset;
        const y = sel.focusOffset;
        console.log(target.selectionStart);
        console.log(sel);
        console.log(x, y);
        const html = evt.target.value;
        this.props.changeHTML(html);
    }

    handleKeyup = (evt) => {
        console.log("key up");
    }

    render() {
        return (
            <ContentEditable
                className={style.wrapper}
                html={this.props.currentHTML}
                disabled={false}
                onChange={this.handleChangeDOM}
                onKeyUp={this.handleKeyup}
                onBlur={this.handleKeyup}
                onFocus={this.handleKeyup}
            >
            </ContentEditable>
        );
    }
}
