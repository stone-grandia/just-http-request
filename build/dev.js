const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/");
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    overlay: true,
    stats: "errors-only",
    compress: true,
    inline: true
});
server.listen(8080);