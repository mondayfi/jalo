var PageView = require('./base');
var details = require('../templates/details5.hbs');


module.exports = PageView.extend({
    pageTitle: 'Details',
    template: details
});
