var PageView = require('./base');
var details = require('../templates/details2.hbs');


module.exports = PageView.extend({
    pageTitle: 'Details',
    template: details
});
