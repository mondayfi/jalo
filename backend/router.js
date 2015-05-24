"use strict";
var path = require('path');
var glob = require('glob');
var router = require('koa-router');
var router = router();
var controllers = {};
var files = glob.sync(path.join(process.cwd(), 'controllers', '**', '*.js'));
files.forEach(function(file) {
  var temp = controllers;
  var parts = path.relative(path.join(process.cwd(), 'controllers'), file).slice(0, -3).split(path.sep);

  while (parts.length) {
    if (parts.length === 1) {
      temp[parts[0]] = require(file);
    } else {
      temp[parts[0]] = temp[parts[0]] || {};
    }
    temp = temp[parts.shift()];
  }
});
module.exports = function(app){
	router
	.get('*', controllers.base);
	return router;	
};