const runSequence = require('run-sequence');

const task = () => {

    return (cb) => {
        runSequence([
            'eslint',
            'modernizr'
        ], cb);
    };
};

module.exports = task;
