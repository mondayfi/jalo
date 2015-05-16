var PageView = require('./base');
var home = require('../templates/home.hbs');


module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: home
});
