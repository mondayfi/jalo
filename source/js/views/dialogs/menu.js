var BaseDialog = require('./base-dialog');
var template = require('../../templates/dialogs/menu.hbs');


module.exports = BaseDialog.extend({
    template: template,
    events: {"click [data-hook=close]": "cancelDialog"}
});
