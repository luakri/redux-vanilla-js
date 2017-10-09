// Webpack dependencies
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../config/webpack.dev');
const browserSync = require('browser-sync');
const config = require('../../config/index');
const getPath = require('../../config/util/getPath');

const getMiddleware = () => {
    let middleware = [];

    /*
     * Developer mode - add Webpack Middleware.
     */
    if (!global.isProd) {
        const compiler = webpack(webpackConfig);

        middleware.push(webpackMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false
            }
        }));
        middleware.push(webpackHotMiddleware(compiler, {
            heartbeat: 2000
        }));
    }

    return middleware;
};

const task = () => {

    return (cb) => {

        browserSync.init({
            server: {
                baseDir: getPath('dest'),
                middleware: getMiddleware()
            },
            port: config.browserPort,
            ui: {
                port: config.UIPort
            },
            ghostMode: {
                links: false
            },
            files: [
                getPath('css', false, true) + '**/*.css',
                getPath('dest') + '**/*.html',
                getPath('js', false, true) + 'vendor/**/*.js'
            ]
        }, cb);
    };
};

module.exports = task;
