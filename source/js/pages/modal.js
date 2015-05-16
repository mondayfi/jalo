var PageView = require('./base');
var modal = require('../templates/modal.handlebars');


module.exports = PageView.extend({
    pageTitle: 'Modal',
    template: modal
});
