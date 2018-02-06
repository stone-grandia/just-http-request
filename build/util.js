const path = require('path');

module.exports.resolve = function (...dirs) {
    return path.normalize(path.join(...[__dirname, '..', ...dirs]));
};
