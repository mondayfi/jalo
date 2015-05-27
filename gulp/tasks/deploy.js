var gulp 				= require('gulp');
var runSequence 		= require('run-sequence');

gulp.task('build', function(cb){
   runSequence('iconFont', 'favicons', 'sass', 'styleguide', 'vendorstyles', 'images', 'markup', 'html', 'browserify', 'server', cb);
});

gulp.task('deploy', function(cb){
   runSequence('server', cb);
});

gulp.task('build-and-deploy', function(cb){
   runSequence('build', 'deploy', cb);
});