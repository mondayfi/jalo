var PageView = require('./base');
var login = require('../templates/login.handlebars');


module.exports = PageView.extend({
    pageTitle: 'Login',
    template: login
});
