var showDebugMessages = false;

function debug(message) {
    if (showDebugMessages) {
        console.info(message);
    }
}

function debugEnabled(bool) {
    showDebugMessages = !!bool;
}

module.exports = {
    debug:  debug,
    debugEnabled: debugEnabled
};
