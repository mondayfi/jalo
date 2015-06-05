var PageView = require('./base');
var details = require('../templates/details6.hbs');
var dom = require('ampersand-dom');

module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: details
});
