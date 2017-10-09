const Server = require('karma').Server;

const task = () => {

    return () => {
        new Server({
            configFile: __dirname + '/../../config/karma.conf.js',
            singleRun: true
        }).start();
    };
};

module.exports = task;
