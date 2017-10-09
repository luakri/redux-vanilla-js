const getPath = require('../../config/util/getPath');

const task = (gulp) => {

    return () => {
        return gulp.src(getPath('img', true) + '/**/*')
            .pipe(gulp.dest(getPath('img', false, true)));
    };
};

module.exports = task;
