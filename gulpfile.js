var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var reload = browserSync.reload;

// browserify dependencies
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify')
var watchify = require('watchify');

var bundler;

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

// browserify task, very very early version
gulp.task('js', js);
function js() {
  gutil.log('browserify bundle created');
      var tmp = browserify('./source/js/main.js', watchify.args);
      // tmp.transform(browserifyHandlebars);
      // tmp.transform(riotify);
      bundler = tmp;

      bundler.bundle()
        // log errors if they happen
          .on('error', gutil.log.bind(gutil, 'Browserify Error'))
          .pipe(source('bundle.js'))
        // optional, remove if you dont want sourcemaps
          .pipe(buffer())
          .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest('./source/js/'));
          // .pipe(livereload());

  // bundleThis(bundles);
}

gulp.task('default', ['watch']);
gulp.task('deploy', ['css', 'images', 'scripts', 'fonts', 'html']);