var PageView = require('./base');
var LoginForm = require('../forms/login.js');
var login = require('../templates/login.hbs');


module.exports = PageView.extend({
		pageTitle: 'Jalo',
		template: login,
		subviews: {
				form: {
						// this is the css selector that will be the `el` in the
						// prepareView function.
						container: 'form',
						// this says we'll wait for `this.model` to be truthy
						waitFor: 'model',
						prepareView: function (el) {
								var model = this.model;
								return new LoginForm({
										el: el,
										model: this.model,
										submitCallback: function (data) {
												app.navigate('/details');
										}
								});
						}
				}
		}
});
