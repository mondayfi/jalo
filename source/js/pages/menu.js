var PageView = require('./base');
var menu = require('../templates/menu.hbs');


module.exports = PageView.extend({
    pageTitle: 'Menu',
    template: menu
});
