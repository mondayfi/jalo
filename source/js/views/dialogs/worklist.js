var BaseDialog = require("./base-dialog");
var template = require('../../templates/dialogs/work-list.hbs');


module.exports = BaseDialog.extend({
    template: template,
    props: {
        messageTitle: ['string', false, 'Warning'],
        message: 'string'
    },
    bindings: {
        'messageTitle': {
            type: 'text',
            hook: 'message-title'
        },
        'message': {
            type: 'text',
            hook: 'message-contents'
        }

    },
    closeable: true,
    events: {"click [data-hook~=close]": "cancelDialog"}
});
