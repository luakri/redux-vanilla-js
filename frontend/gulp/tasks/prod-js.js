const runSequence = require('run-sequence');

const task = () => {

    return (cb) => {
        runSequence([
            'eslint',
            'modernizr',
            'webpack'
        ], cb);
    };
};

module.exports = task;
