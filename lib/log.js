var Color   = require('./color');

var showDebugMessages = false;

function debug(message) {
    if (showDebugMessages) {
        console.info(Color.GREY + message + Color.RESET);
    }
}

function error(message) {
    console.error(Color.RED + message + Color.RESET);
}

function debugEnabled(bool) {
    showDebugMessages = !!bool;
}

module.exports = {
    debug:  debug,
    error:  error,
    debugEnabled: debugEnabled
};
