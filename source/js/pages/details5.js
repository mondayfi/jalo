var PageView = require('./base');
var details = require('../templates/details5.hbs');
var dom = require('ampersand-dom');
var $ = require('jquery');

module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: details,
    events: {
      'click [data-hook=ja-person-list__item]' : 'checkPerson',
      'click [data-hook=sendsms]' : 'sendsms'
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
    },
    sendsms: function(e) {
      e.preventDefault();
      app.navigate('details6')
      $.ajax({
        url: 'http://rest.nexmo.com/sms/xml?api_key=226a94e0&api_secret=c30f095e&from=358401234567&to=358404869209&text=Sinulle%20on%20l%C3%A4hetty%20ty%C3%B6%20Jalosta%3A%20http%3A%2F%2Fjalo-proto.herokuapp.com%2Fjobdetails .',
        type: 'GET',
        success: function(data) { }
     });
    }
});
