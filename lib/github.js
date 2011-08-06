var URL     = require('url');
var Request = require('request');
var Step    = require('step');
var Util    = require('./util');
var log     = require('./log');

function changes(options, cb) {
    // TODO: better argument check and url fix, or just use npm project name

    var repoURL = URL.parse(options.repo.replace(/\.git$/, ''));
    var project = repoURL.pathname;

    if (!project) {
        throw new Error('that\'s no github url i know of');
    }

    // remove leading /'s
    project = project.replace(/^\//g, '');

    var url = 'https://api.github.com/repos/' + project + '/commits?per_page=100';
    log.debug('requesting: ' + url);
    Request({uri: url}, function (error, response, body) {
        log.debug('complete: ' + url);

        // TODO: better check for return data

        var changes = [];
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            data.forEach(function(change){
                var date = new Date(change.commit.committer.date);
                var message = change.commit.message;
                changes.push({
                    date:       date,
                    message:    message
                });
            });
        } else {
            error = Error('Unknown Github Repo: ' + options.repo);
        }
        cb(error, { changes: changes });
    });
}

function changelog(repo, cb) {
    var Versions = [];
    var VersionsHash = {};

    Step(function() {
            changes({repo: repo}, this);
        },
        function(err, data) {
            if (data && data.changes) {
                data.changes.forEach(function(change){
                    if (change) {
                        var date = change.date;
                        var simpleDate = date.getFullYear() + '-' +  Util.padZero(date.getMonth() + 1) + '-' + Util.padZero(date.getDate());
                        VersionsHash[simpleDate] = VersionsHash[simpleDate] || { date: new Date(simpleDate), changes: [] };
                        VersionsHash[simpleDate].changes.push(change);
                    }
                });
            }

            Object.keys(VersionsHash).forEach(function(simpleDate) {
                Versions.push(VersionsHash[simpleDate]);
            });
            cb(err, Versions);
        });
}

module.exports = {
    changes:    changes,
    changelog:  changelog
};


    /*
    Request({uri: 'https://github.com/api/v2/json/commits/show/dylang/node-xml/eb9faadc1a99157a123bf6fe0748e3e0d52caaf6'}, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body).commit.modified;
            data.forEach(function(change){
                log(change.filename, change.diff);
            });
        }

    });
    */
