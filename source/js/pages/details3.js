var PageView = require('./base');
var details = require('../templates/details3.hbs');
var dom = require('ampersand-dom');
var _ = require('lodash');

module.exports = PageView.extend({
    pageTitle: 'Jalo',
    template: details,
    events: {
      'change [data-hook=form-upload]' : 'uploadFile'
    },
    uploadFile: function (event) {
      var self = this;
      var element = document.getElementById('ja-image-uploader');

      dom.addClass(element, 'ja-image-uploader--clicked');

      _.delay(function(text) {
        dom.addClass(element, 'ja-image-uploader--success');
        self.buttonState();
      }, 2600);

    },
    buttonState: function() {
      console.log("did you come here?")
      var element = document.getElementById('ja-question-upload');
      dom.addClass(element, 'ja-button--purple');
      dom.removeClass(element, 'ja-button--grey');
    }
});
