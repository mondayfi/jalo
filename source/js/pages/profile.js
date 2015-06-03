var PageView = require('./base');
var ProfileTemplate = require('../templates/profile.hbs');


module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: ProfileTemplate
});
