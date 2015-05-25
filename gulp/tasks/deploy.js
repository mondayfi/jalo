var gulp 				= require('gulp');
var runSequence 		= require('run-sequence');

gulp.task('deploy', function(cb){
   runSequence('sass', 'styleguide', 'vendorstyles', 'images', 'markup', 'html', 'browserify', 'server', cb);
});