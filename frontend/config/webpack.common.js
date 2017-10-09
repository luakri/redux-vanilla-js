const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const getPath = require('./util/getPath');
const root = require('./util/getRoot');

const options = {
    entry: {
        main: [
            root(getPath('js', true) + 'main.js')
        ],
        libs: [
            'jquery',
            'redux',
            'redux-thunk'
        ]
    },

    resolve: {
        alias: {
            'jquery': root(getPath('js', true) + 'vendor/jquery-2.2.1.js')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['libs']
        })
    ]
};

module.exports = options;