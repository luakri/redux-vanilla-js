const rimraf = require('rimraf');

const task = (path) => {

    return (cb) => {
        rimraf(path, {
            glob: false
        }, cb);
    };
};

module.exports = task;