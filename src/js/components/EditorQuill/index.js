/**
 * Quiilを使ったエディタ
 */
import { Component, PropTypes } from 'react';
import style from './style.css';

import ReactQuill from 'react-quill';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
    }

    handleChange = (value) => {
        this.setState({ text: value })
    }

    render() {
        return (
            <ReactQuill
                theme="snow"
                value={this.state.text}
                onChange={this.handleChange}
            />
        )
    }
}
