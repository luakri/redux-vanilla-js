const webpack = require('webpack');
const webpackConfig = require('../../config/webpack.prod');
const gutil = require('gulp-util');

const task = () => {

    return (cb) => {

        webpack(webpackConfig, function(err, stats) {
            if (err) {
                gutil.log('webpack', err);
            }

            gutil.log('[webpack]');

            gutil.log(stats.toString({
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false
            }));

            cb();
        });
    };
};

module.exports = task;