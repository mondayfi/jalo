var PageView = require('./base');
var login = require('../templates/login.hbs');


module.exports = PageView.extend({
    pageTitle: 'Login',
    template: login
});
