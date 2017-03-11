/**
 * Editor Input Field
 */
import { Component, PropTypes } from 'react';
import style from './input-field.css';

export default class extends Component {
    static propTypes = {
        filter: PropTypes.object.isRequired,
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
        const filter = this.props.filter;
        filter.setHTML(html);
    }

    render() {
        return (
            <div ref="root" className={style.wrapper} contentEditable="true">
                <div></div>
            </div>
        );
    }
}
