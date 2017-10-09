const path = require('path');

// Get relative path
module.exports = function(arg) {
    return path.resolve(__dirname, '../../../', arg);
};