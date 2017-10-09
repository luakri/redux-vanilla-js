const config = require('../index');

// Filters out non .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function(type, isSource, isDestination) {

    if (isSource) {
        return config.PATHS.SRC + config.PATHS[type.toUpperCase()];
    }
    if (isDestination) {
        return config.PATHS.DEST + config.PATHS[type.toUpperCase()];
    }

    return config.PATHS[type.toUpperCase()];
};