const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const getPath = require('./util/getPath');
const root = require('./util/getRoot');

const moduleOptions = {
    devtool: 'eval',

    entry: {
        main: [
            'webpack-hot-middleware/client?reload=true'
        ]
    },

    output: {
        publicPath: '/js',
        path: root(getPath('js', false, true)),
        filename: '[name].js',
        pathinfo: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: false
        })
    ]
};

const options = webpackMerge(moduleOptions, commonConfig);

module.exports = options;