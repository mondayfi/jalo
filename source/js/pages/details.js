var PageView = require('./base');
var details = require('../templates/details.hbs');


module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: details,
    initialize: function (spec) {
      console.log(spec);
    }
});
