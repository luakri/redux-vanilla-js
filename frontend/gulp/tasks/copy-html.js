const getPath = require('../../config/util/getPath');

const task = (gulp) => {

    return () => {
        return gulp.src(getPath('src') + '/**/*.html')
            .pipe(gulp.dest(getPath('dest')));
    };
};

module.exports = task;