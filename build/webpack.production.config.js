const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.config');
const util = require('./util')

module.exports = merge(baseWebpackConfig, {
    entry: util.resolve('src/index.js'),
    output: {
        library: '$http',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new CleanWebpackPlugin('dist', {
            root: util.resolve('.'),
            verbose: true,
            dry: false
        })
    ]
});