"use strict";

var chalk = require('chalk');

var showDebugMessages;

function debug(message) {
    if (showDebugMessages) {
        console.info(chalk.green('changelog'), message);
    }
}

function error(message) {
    console.error(chalk.red('changelog'), message);
}

function enableDebug(bool) {
    showDebugMessages = bool;
}

module.exports = {
    debug:  debug,
    error:  error,
    enableDebug: enableDebug
};
