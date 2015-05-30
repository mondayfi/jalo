var PageView = require('./base');
var details = require('../templates/details-done.hbs');


module.exports = PageView.extend({
    pageTitle: 'Details',
    template: details
});
