"use strict";
var path = require('path');
var glob = require('glob');
var route = require('koa-route');

var controllers = {};
var files = glob.sync(path.join(process.cwd(), 'controllers', '**', '*.js'));
files.forEach(function(file) {
  var temp = controllers;
  var parts = path.relative(path.join(process.cwd(), 'services', 'frontend', 'controllers'), file).slice(0, -3).split(path.sep);

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
	app.use(route.get('/', controllers.base));
	
};