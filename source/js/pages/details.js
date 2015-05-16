var PageView = require('./base');
var details = require('../templates/details.handlebars');


module.exports = PageView.extend({
    pageTitle: 'Details',
    template: details
});
