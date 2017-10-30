"use strict";

var chalk = require('chalk');

var showDebugMessages;

function debug(message) {
    if (showDebugMessages) {
        var args = Array.prototype.slice.call(arguments, 0);
        // prevent `%.` printf-style expansions; see https://nodejs.org/api/console.html#console_console_log_data_args
        args.unshift(chalk.green('changelog'));
        console.log.apply(console, args);
    }
}

function error(message) {
    var args = Array.prototype.slice.call(arguments, 0);
    // prevent `%.` printf-style expansions; see https://nodejs.org/api/console.html#console_console_log_data_args
    args.unshift(chalk.red('changelog'));
    console.error.apply(console, args);
}

function enableDebug(bool) {
    showDebugMessages = bool;
}

module.exports = {
    debug:  debug,
    error:  error,
    enableDebug: enableDebug
};
