var PageView = require('./base');
var modal = require('../templates/modal.hbs');


module.exports = PageView.extend({
    pageTitle: 'Modal',
    template: modal
});
