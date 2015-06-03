var PageView = require('./base');
var SettingsTemplate = require('../templates/settings.hbs');


module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: SettingsTemplate
});
