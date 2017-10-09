const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const getPath = require('../../config/util/getPath');

const options = {
    errLogToConsole: true,
    outputStyle: 'compressed',
};

const task = (gulp) => {

    return () => {

        return gulp
            .src(getPath('sass', true) + '/main.scss')
            .pipe(sourcemaps.init())
            .pipe(sass(options).on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(autoprefixer())
            .pipe(gulp.dest(getPath('css', false, true)));
    };
};

module.exports = task;
