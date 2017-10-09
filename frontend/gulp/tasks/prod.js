const runSequence = require('run-sequence');

const task = () => {

    global.isProd = true;

    return (cb) => {

        runSequence(
            'clean',
            [
                'prod-js',
                'copy-html',
                'copy-images',
                'sass-prod',
            ], cb);
    };
};

module.exports = task;
