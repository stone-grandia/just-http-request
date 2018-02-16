const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const util = require('./util');

module.exports = merge(baseWebpackConfig, {
  entry: [util.resolve('test/main.js')],
  devServer: {
    hot: true,
    overlay: true,
    stats: "errors-only",
    compress: true,
    inline: true,
    port: 8080,
    open: true,
    watchOptions: {
      poll: false
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: util.resolve('test/index.html')
    })
  ]
});

