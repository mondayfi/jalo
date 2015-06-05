var PageView = require('./base');
var details = require('../templates/details4.hbs');
var dom = require('ampersand-dom');

module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: details,
    events: {
      'change [data-hook=rangeslider]' : 'slided'
    },
    slided: function(event) {
      var element = document.getElementById('ja-rangeslider__value');
      dom.text(element, event.delegateTarget.value);
    }
});
