const eslint = require('gulp-eslint');
const getPath = require('../../config/util/getPath');

const task = (gulp) => {

    return () => {

        return gulp.src([
            getPath('js', true) + '**/*.js',
            getPath('components', true) + '**/*.js',
            'gulpfile.js',
            getPath('gulp') + '**/*.js',
            getPath('config') + '**/*.js',
            '!' + getPath('js', true) + 'vendor/**/*.js',
            '!' + getPath('js', true) + 'vendor-modified/**/*.js'
        ])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    };
};

module.exports = task;
