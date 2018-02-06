const util = require('./util');

module.exports = {
    devtool: 'source-map',
    output: {
        path: util.resolve('dist'),
        filename: 'just-http-request.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [util.resolve('src'), util.resolve('test')]
            }
        ]
    }
};