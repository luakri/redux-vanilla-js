const runSequence = require('run-sequence');

const task = () => {

    global.isProd = true;

    return (cb) => {

        runSequence('browsersync', 'watch', cb);
    };
};

module.exports = task;
