"use strict";

var WordWrap = require('wordwrap');

var wordwrap;

// replace with moment
function padZero(n) {
    return n > 10 ? n : '0' + n;
}

function initWordWrap(width){
    if (!width) {
        width = process.stdout.columns;
    }

    wordwrap = WordWrap(4, width);
}

function bullet(string, bulletCharacter) {
    if (!wordwrap) {
        initWordWrap();
    }
    string = string.replace(/(\r?\n)+/g, '\r\n');
    return '  ' + (bulletCharacter || '*') + ' ' + wordwrap(string).trim();
}

module.exports = {
    padZero:    padZero,
    bullet:     bullet
};