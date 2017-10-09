const getPath = require('../../config/util/getPath');

const task = (gulp) => {

    return () => {
        //gulp.watch(getPath('js', true) + '**/*.js', ['eslint']);
        gulp.watch(getPath('src') + '/**/*.html', ['copy-html']);
        gulp.watch([
            getPath('sass', true) + '**/*.scss',
            getPath('components', true) + '**/*.scss'
        ], ['sass-dev']);
    };
};

module.exports = task;
