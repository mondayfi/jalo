var PageView = require('./base');
var WelcomeUserTemplate = require('../templates/welcomeuser.hbs');


module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: WelcomeUserTemplate
});
