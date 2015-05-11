var gulp        = require('gulp');
var styleguide  = require('sc5-styleguide');
var config      = require('../config');

gulp.task('styleguide:generate', function() {
  return gulp
    .src(config.sass.src)
    .pipe(styleguide.generate(config.styleguide.config))
    .pipe(gulp.dest(config.styleguide.tmp));
});

gulp.task('styleguide:applystyles', function() {
  return gulp
    gulp.src(config.sass.dest + 'main.css')
    .pipe(sass(config.sass.settings))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(config.styleguide.tmp));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);