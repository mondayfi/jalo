var PageView = require('./base');
var details = require('../templates/details5.hbs');
var dom = require('ampersand-dom');

module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: details,
    events: {
      'click [data-hook=ja-person-list__item]' : 'checkPerson'
    },
    initialize: function () {
      this.personsChecked = 0;
    },
    checkPerson: function (event) {
      if(this.personsChecked < 4) {
        if(dom.hasClass(event.delegateTarget, 'ja-person-list__item--checked')) {
          dom.removeClass(event.delegateTarget, 'ja-person-list__item--checked');
          this.personsChecked--;
        } else {
          dom.addClass(event.delegateTarget, 'ja-person-list__item--checked');
          this.personsChecked++;
        }
      }
      if(this.personsChecked === 4) {
        var element = document.getElementById('ja-choose-person');
        dom.switchClass(element, 'ja-button--grey', 'ja-button--purple');
      }
    }
});
