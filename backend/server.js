'use strict';
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var hbs = require('koa-hbs');
var koa = require('koa');
var path = require('path');
var app = module.exports = koa();


// Logger
app.use(logger());
app.use(hbs.middleware({
  viewPath: path.join(process.cwd(), 'views')
}));


var router = require('./router')(app);
app.use(router.routes());
app.use(router.allowedMethods());

// Serve static files
console.log(path.join('..', 'dist'));
app.use(serve(path.join('..', 'dist')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}