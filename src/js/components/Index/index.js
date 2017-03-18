/**
 * Index
 */
import { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

const style = {
    wrapper: {
        textAlign: "center",
    }
};

export default class extends Component {
    render() {
        return (
            <div style={style.wrapper}>
                <p>
                    <Link to="/editor-scratch">フルスクラッチMock</Link>
                </p>
                <p>
                    <a href="http://codepen.io/alexkrolick/full/xgyOXQ/">React-Quiil（ライブラリ）</a>
                </p>
            </div>
        );
    }
}
