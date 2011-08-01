var log = require('logging').from(__filename);
var WordWrap = require('wordwrap')(4, 80);

function padZero(n) {
    return n > 10 ? n : '0' + n;
}

function bullet(string) {
    string = string.replace(/(\r?\n)+/g, '\r\n');
    return '  * ' + WordWrap(string).trim();
}

module.exports = {
    padZero:    padZero,
    bullet:     bullet
};