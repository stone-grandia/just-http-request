const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const util = require('./util');

module.exports = merge(baseWebpackConfig, {
    entry: [util.resolve('test/main.js')],
    plugins: [
        new HtmlWebpackPlugin({
            template: util.resolve('test/index.html')
        })
    ]
});