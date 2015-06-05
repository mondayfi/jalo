var BaseDialog = require('./base-dialog');
var template = require('../../templates/dialogs/map.hbs');


module.exports = BaseDialog.extend({
    template: template,
    events: {"click [data-hook=close]": "cancelDialog"}
});
