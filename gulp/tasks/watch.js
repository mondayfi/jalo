/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['sass', 'styleguide', 'vendorstyles', 'images', 'markup', 'html', 'watchify', 'server'], function() {
  gulp.watch(config.sass.src,   ['sass', 'styleguide']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.server.src, ['server']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
