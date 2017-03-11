import { Component } from 'react';
import EventEmitter from 'eventemitter2';

export default class extends EventEmitter {
    constructor() {
        super();
        this.EVENT = {
            CHANGE: 'change',
        }
        this.TYPE = {
            TEXT: 'text',
        };

        // 文書構造array
        this.body = [];
        this.currentType = this.TYPE.TEXT;
    }

    update(html) {
        console.log(html);
    }

    setType(type) {
        this.currentType = type;
    }
}
