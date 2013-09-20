"use strict";

var indent = 4;
var wordwrap = require('wordwrap');

function bullet(string, bulletCharacter, noWrap) {

    function wrap(str) {
        var columns = !noWrap && process.stdout.columns || 100000;

        return wordwrap(indent, columns)(str).trim();
    }

    string = string.replace(/(\r?\n)+/g, '\n');

    return '  ' + (bulletCharacter || '*') + ' ' + wrap(string);
}

module.exports = bullet;