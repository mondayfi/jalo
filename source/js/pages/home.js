var PageView = require('./base');
var home = require('../templates/home.handlebars');


module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: home
});
