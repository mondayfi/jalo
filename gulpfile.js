var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var styleguide = require('sc5-styleguide');
var reload = browserSync.reload;

var config = {
  version: pkg.version,
  source: pkg.config.source,
  dist: pkg.config.dist,
  port: pkg.config.port,
  hostname: process.env.HOSTNAME || pkg.config.hostname,
  patternlibrarypath: pkg.config.patternlibrarypath,
  tmpPath: "tmp",
  styleguideTmpPath: "tmp/styleguide",
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
  return gulp
    .src(config.source + 'images/**.**')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('scripts', function () {
  return gulp
    .src(config.source + 'js/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function () {
  return gulp
    .src(config.source + 'fonts/*.**')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', function () {
  return gulp
    .src(config.source + '*.html')
    .pipe(gulp.dest('dist'));
});

// Styleguide stuff
gulp.task('styleguide:generate', function() {
  return gulp
    .src(config.source + 'css/**/*.scss')
    .pipe(styleguide.generate({
        title: 'Jalo Patternlibrary',
        server: true,
        rootPath: config.styleguideTmpPath,
        overviewPath: "readme-patternlibrary.md"
      }))
    .pipe(gulp.dest(config.styleguideTmpPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp
    .src(config.source + 'css/import.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(config.styleguideTmpPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

// Watch Files For Changes
gulp.task('dev', ['html', 'css', 'images', 'scripts', 'styleguide'],function() {
  gulp.watch(config.source + 'js/**', ['scripts']);
  gulp.watch(config.source + 'css/**/*.scss', ['css', 'styleguide']);
  gulp.watch(config.source + '*.html', ['html']);
  gulp.watch(config.source + 'images/**', ['images']);
  console.log(
    '\nDeveloper mode!\n\nJalo Pattern library available at http://localhost:3000/\n'
  );
  browserSync.init({
    server: config.dist,
    port: config.port
  });
});

gulp.task('default', ['dev']);
gulp.task('deploy', ['css', 'images', 'scripts', 'fonts', 'html']);
gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);