/**
 * Editor Input Field
 */
import { Component, PropTypes } from 'react';
import style from './style.css';

export default class extends Component {
    static propTypes = {
        changeHTML: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.ob = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                this.handleChangeDOM();
            });
        });

        this.ob.observe(this.refs.root, {
            childList: true,
        });
    }

    handleChangeDOM = () => {
        const html = this.refs.root.innerHTML;
        this.props.changeHTML(html);
    }

    render() {
        return (
            <div ref="root" className={style.wrapper} contentEditable="true">
                <div></div>
            </div>
        );
    }
}
