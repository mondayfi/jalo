var FormView = require('ampersand-form-view');
var InputView = require('ampersand-floatinglabel-input-view');
var uniqueId = require('lodash.uniqueid');
var login = require('../templates/login.hbs');
var ExtendedInput = InputView.extend({
    template: require('../templates/includes/login.hbs')
});

module.exports = FormView.extend({
    pageTitle: 'Login',
    template: login,
    fields: function () {
      return [
        new ExtendedInput({
          label: 'Sähköposti',
          name: uniqueId('ja-login'),
          type: 'email',
          required: true,
          parent: this,
          labelClass: 'ja-input__label--floating',
          validityClassSelector: '[data-hook=inputwrap]',
          validClass: 'ja-input--is-valid',
          invalidClass: 'ja-input--is-invalid',
          requiredMessage: 'Pakollinen',
          tests: [
              function (value) {
                  if (value.length < 3) {
                      return "Liian lyhyt";
                  }
              }
          ]
        }),
        new ExtendedInput({
          label: 'Salasana',
          name: uniqueId('ja-login'),
          type: 'password',
          required: true,
          parent: this,
          labelClass: 'ja-input__label--floating',
          validityClassSelector: '[data-hook=inputwrap]',
          validClass: 'ja-input--is-valid',
          invalidClass: 'ja-input--is-invalid',
          requiredMessage: 'Pakollinen',
          tests: [
              function (value) {
                  if (value.length < 3) {
                      return "Liian lyhyt";
                  }
                  if (value.length > 20) {
                      return "Liian pitkä";
                  }
              }
          ]
        }),
      ];
    }
});
