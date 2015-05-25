var gulp        = require('gulp');
var styleguide  = require('sc5-styleguide');
var sass        = require('gulp-sass');
var config      = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('styleguide:generate', function() {
  return gulp
    .src(config.styleguide.src)
    .on('error', handleErrors)
    .pipe(styleguide.generate(config.styleguide.config))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styleguide.tmp));
});

gulp.task('styleguide:applystyles', function() {
  return gulp
    .src(config.styleguide.dest)
    .on('error', handleErrors)
    .pipe(sass(config.sass.settings))
    .on('error', handleErrors)
    .pipe(styleguide.applyStyles())
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styleguide.tmp));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);