'use strict';
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var hbs = require('koa-hbs');
var koa = require('koa');
var path = require('path');
var app = module.exports = koa();

var port = process.env.PORT || 3000;


// Logger
app.use(logger());
app.use(hbs.middleware({
  viewPath: path.join(process.cwd(), 'views')
}));


app.use(serve('../dist'));
var router = require('./router')(app);
app.use(router.routes());
app.use(router.allowedMethods());


// Compress
app.use(compress());

if (!module.parent) {
  app.listen(port);
  console.log('listening on port %s', port);
}