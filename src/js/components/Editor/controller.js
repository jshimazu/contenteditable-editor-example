/**
 * Editor Controller
 */
import { Component, PropTypes } from 'react';
import style from './controller.css';

export default class extends Component {
    static propTypes = {
        filter: PropTypes.object.isRequired,
    };

    state = {
        currentType: this.props.filter.TYPE.TEXT,
    };

    handleClickHeader = () => {
        console.log("click header");
        this.setState({
            currentType: this.props.filter.TYPE.HEADER1
        });
    }

    handleClickQuote = () => {
        // TODO
        console.log("click quote");
    }

    handleClickHighlight = () => {
        // TODO
        console.log("click highlight");
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
