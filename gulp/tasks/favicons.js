var gulp      = require('gulp');
var favicons  = require('gulp-favicons');
var config    = require('../config').favicons;

gulp.task('favicons', function () {
  gulp.src(config.src)
    .pipe(favicons(config.config))
    .pipe(gulp.dest(config.dest));
});