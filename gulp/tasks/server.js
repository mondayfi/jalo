var spawn				= require('child_process').spawn;
var gulp				= require('gulp');
var config				= require('../config').server;
var bundleLogger        = require('../util/bundleLogger');
var gutil 				= require('gulp-util');
var _ 					= require('lodash');

var serviceProcess;

var rtrim = function(stringToTrim) {
  return stringToTrim.replace(/\s+$/,"");
}

var logChunk=  function(chunk, color) {
  chunk.split('\n').map(rtrim).filter(_.identity).forEach(function(line) {
    gutil.log(gutil.colors[color]("server:"), line);
  });
};

var stopServer = function() {
	serviceProcess.kill();
};

var startServer = function() {
	if(serviceProcess) {
		stopServer();
	}
	var args = ['--', config.processFile];
	console.log(config.processFile);
	serviceProcess =  spawn('iojs', args, {cwd: config.folder});

	serviceProcess.stdout.setEncoding('utf8');
	serviceProcess.stdout.on('data', function (data) {
		logChunk(data, 'green');
	});

	serviceProcess.stderr.setEncoding('utf8');
	serviceProcess.stderr.on('data', function (data) {
		logChunk(data, 'red');
	});

};

gulp.task('server', startServer);


module.exports = startServer();