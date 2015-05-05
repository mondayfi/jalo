var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var reload = browserSync.reload;

var config = {
  version: pkg.version,
  source: pkg.config.source,
  dist: pkg.config.dist,
  port: pkg.config.port,
  hostname: process.env.HOSTNAME || pkg.config.hostname,
  sassoptions: {
      sourcemap: true,
      style: "expanded"
  }
};
gulp.task('css', function () {
  return gulp
    .src(config.source + 'css/import.scss')
    .pipe(sass(config.sassoptions))
    .on('error', function (error) {
      console.log(error);
    })
    .pipe(rename('main.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function () {
  return gulp.src(config.source + 'images/**.**')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('scripts', function () {
  return gulp.src(config.source + 'js/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function () {
  return gulp.src(config.source + 'fonts/*.**')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', function () {
  return gulp.src(config.source + '*.html')
    .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(config.source + 'js/**', ['scripts']);
  gulp.watch(config.source + 'css/**/*.scss', ['css']);
  gulp.watch(config.source + '*.html', ['html', 'css', 'scripts']);
  gulp.watch(config.source + 'images/**', ['images']);

  browserSync.init({
    server: config.dist,
    port: config.port
  });
});

gulp.task('default', ['watch']);
gulp.task('deploy', ['css', 'images', 'scripts', 'fonts', 'html']);