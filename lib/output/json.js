"use strict";

function json(data, cb) {
    var err = !data || !data.versions || !data.versions.length ? new Error ('No Changes') : null;
    cb(err, JSON.stringify(data));
}

module.exports = json;