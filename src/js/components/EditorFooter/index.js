/**
 * Editor Controller
 */
import { Component, PropTypes } from 'react';
import style from './style.css';
import { DECORATE_TYPE } from '../../constants/editor';

export default class extends Component {
    static propTypes = {
        changeDecorateType: PropTypes.func.isRequired
    };

    handleClickHeader = () => {
        console.log("click header");
        this.props.changeDecorateType(DECORATE_TYPE.HEADER1);
    }

    handleClickQuote = () => {
        // TODO
        console.log("click quote");
        this.props.changeDecorateType(DECORATE_TYPE.QUOTE);
    }

    handleClickHighlight = () => {
        // TODO
        console.log("click highlight");
        this.props.changeDecorateType(DECORATE_TYPE.HIGHLIGHT);
    }

    render() {
        return (
            <div className={`${style.wrapper}`}>
                <i onClick={this.handleClickHeader} className={`fa fa-header`}></i>
                <i onClick={this.handleClickQuote} className={`fa fa-quote-left`}></i>
                <i onClick={this.handleClickHighlight} className={`fa fa-magic`}></i>
            </div>
        );
    }
}
