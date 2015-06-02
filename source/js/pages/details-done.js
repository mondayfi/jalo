var PageView = require('./base');
var details = require('../templates/details-done.hbs');


module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: details
});
