process.env.BABEL_ENV = 'test';

const config = require('./index');
const webpackConfig = require('./webpack.dev.js');

const jsApp = config.PATHS.JS;
const jsComponents = config.PATHS.COMPONENTS;

const testGlob = jsApp + '**/*.spec.js';
const testComponents = jsComponents + '**/*.spec.js';

// webpack chunkNames not compatible with karma.
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);
webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

module.exports = function (config) {

    config.set({
        basePath: '../src',
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [testGlob, testComponents],
        preprocessors: {
            [testGlob]: ['webpack'],
            [testComponents]: ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {noInfo: true},
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            check: {
                global: {
                    statements: 11,
                    branches: 0,
                    functions: 0,
                    lines: 11,
                }
            },
            reporters: [
                {type: 'lcov', dir: '../reports/coverage', subdir: '.'}
            ]
        },
        port: 9998,
        runnerPort: 9999,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        concurrency: Infinity,
        captureTimeout: 8500,
        reportSlowerThan: 500
    });
};