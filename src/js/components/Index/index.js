/**
 * Index
 */
import { Component, PropTypes } from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';

export default class extends Component {
    render() {
        return (
            <div>
                <p>
                    <Link to="/editor-scratch">オリジナルエディタ</Link>
                </p>
                <p>
                    <Link to="/editor-quill">Quillエディタ</Link>
                </p>
            </div>
        );
    }
}
