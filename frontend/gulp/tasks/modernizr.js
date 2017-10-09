const modernizr = require('gulp-modernizr-build');
const uglify = require('gulp-uglify');
const getPath = require('../../config/util/getPath');

const task = (gulp) => {

    return () => {
        return gulp.src([
            getPath('js', true) + '/**/*.js',
        ])
            .pipe(modernizr('modernizr.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(getPath('js', false, true) + 'vendor'));
    };
};

module.exports = task;
