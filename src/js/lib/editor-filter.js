import { Component } from 'react';
import EventEmitter from 'eventemitter2';

/**
 * Usage:
 *
 * import 
 * const es = new EditorFilter();
 *
 * targetElm.on('change', (evt) => {
 *     es.setHTML(evt.target.innerHTML);
 * });
 */
export default class extends EventEmitter {
    constructor() {
        super();
        this.EVENT = {
            CHANGE_TYPE: 'change_type',
            CHANGE_HTML: 'change_html',
            CHANGE_CURSOR: 'change_cursor',
        }

        this.TYPE = {
            TEXT: 'text',
            HEADER1: 'header_1',
        };

        this.typeElementMap = {
            this.TYPE.TEXT: '',
        }

        this.currentHTML = '';
        this.currentType = this.TYPE.TEXT;
        this.currentCursorX = 0;
        this.currentCursorY = 0;

        this.on(this.EVENT.CHANGE_TYPE, this.handleChangeType);
        this.on(this.EVENT.CHANGE_HTML, this.handleChangeHTML);
    }

    setHTML(html) {
        this.currentHTML = this.filterHTML(html);
        this.emit(this.EVENT.CHANGE_HTML, html);
    }

    setType(type) {
        this.currentType = type;
        this.emit(this.EVENT.CHANGE_TYPE, type);
    }

    setCursorPos(x, y) {
        this.currentCursorX = x;
        this.currentCursorY = y;
        this.emit(this.EVENT.CHANGE_CURSOR, [x, y]);
    }

    getFilteredHTML() {
        return this.currentHTML;
    }

    filterHTML(html) {
        // TODO
        return html += "<div>追記してみた</div>";
    }

    handleChangeType = () => {
        console.log(this.currentHTML);
    }

    handleChangeHTML = () => {
        console.log(this.currentHTML);
    }
}
