var PageView = require('./base');
var PreviousWorkTemplate = require('../templates/previous-work.hbs');


module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: PreviousWorkTemplate
});
