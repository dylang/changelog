var log         = require('logging').from(__filename);
var WordWrap    = require('wordwrap');
var TTY         = require('tty');

var wordwrap;

function padZero(n) {
    return n > 10 ? n : '0' + n;
}

function initWordWrap(width){
    if (!width) {
        width = process.stdout.columns || 10000;
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

function enableColor() {
    return TTY.isatty(1);
}

module.exports = {
    padZero:    padZero,
    bullet:     bullet,
    enableColor: enableColor
};