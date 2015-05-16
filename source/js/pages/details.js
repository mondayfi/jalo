var PageView = require('./base');
var details = require('../templates/details.hbs');


module.exports = PageView.extend({
    pageTitle: 'Details',
    template: details
});
