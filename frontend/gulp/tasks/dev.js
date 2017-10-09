const runSequence = require('run-sequence');

const task = () => {

    return (cb) => {

        global.isProd = false;

        runSequence(
            'clean',
            [
                'dev-js',
                'copy-html',
                'copy-images',
                'sass-dev',
            ],
            [
                'browsersync',
                'watch'
            ], cb);
    };
};

module.exports = task;
