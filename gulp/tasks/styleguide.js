var gulp        = require('gulp');
var styleguide  = require('sc5-styleguide');
var config      = require('../config').styleguide;

gulp.task('styleguide:generate', function() {
  return gulp
    .src(config.srcImport)
    .pipe(styleguide.generate(config.config))
    .pipe(gulp.dest(config.tmp));
});

gulp.task('styleguide:applystyles', function() {
  return gulp
    .src(config.distCSS)
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(config.tmp));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);