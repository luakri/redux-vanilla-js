const gulp = require('gulp');
const getPath = require('../config/util/getPath');

const clean = require('./tasks/clean');
const copyImages = require('./tasks/copy-images');
const copyHtml = require('./tasks/copy-html');
const webpack = require('./tasks/webpack');
const eslint = require('./tasks/eslint');
const modernizr = require('./tasks/modernizr');
const devJs = require('./tasks/dev-js');
const prodJs = require('./tasks/prod-js');
const sassDev = require('./tasks/sass-dev');
const sassProd = require('./tasks/sass-prod');
const browsersync = require('./tasks/browsersync');
const watch = require('./tasks/watch');
const dev = require('./tasks/dev');
const prod = require('./tasks/prod');
const server = require('./tasks/server');
const unit = require('./tasks/unit');

gulp.task('clean', clean(getPath('dest')));

gulp.task('copy-images', copyImages(gulp));

gulp.task('copy-html', copyHtml(gulp));

gulp.task('eslint', eslint(gulp));

gulp.task('modernizr', modernizr(gulp));

gulp.task('dev-js', devJs());

gulp.task('prod-js', prodJs());

gulp.task('sass-dev', sassDev(gulp));

gulp.task('sass-prod', sassProd(gulp));

gulp.task('browsersync', browsersync(gulp));

gulp.task('dev', dev());

gulp.task('watch', watch(gulp));

gulp.task('webpack', webpack());

gulp.task('prod', prod());

gulp.task('server', server());

gulp.task('unit', unit());

gulp.task('default', ['dev']);
