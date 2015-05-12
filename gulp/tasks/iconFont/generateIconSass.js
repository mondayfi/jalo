var gulp     = require('gulp');
var config   = require('../../config').iconFonts;
var swig     = require('gulp-swig');
var rename   = require('gulp-rename');

module.exports = function(codepoints, options) {
  gulp.src(config.template)

    .pipe(rename(config.sassOutputName))
    .pipe(gulp.dest(config.sassDest));
};
