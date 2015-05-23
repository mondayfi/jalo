var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var LoginPage = require('./pages/login');
var DetailsPage = require('./pages/details');
var Modal = require('./pages/modal');
var Menu = require('./pages/menu');
// var CollectionDemo = require('./pages/collection-demo');
// var InfoPage = require('./pages/info');
// var PersonAddPage = require('./pages/person-add');
// var PersonEditPage = require('./pages/person-edit');
// var PersonViewPage = require('./pages/person-view');

module.exports = Router.extend({
    routes: {
        '': 'home',
        'login': 'loginPage',
        'details': 'detailsPage',
        'modal': 'modal',
        'menu': 'menu'
        // 'person/add': 'personAdd',
        // 'person/:id': 'personView',
        // 'person/:id/edit': 'personEdit',
        // '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.trigger('page', new HomePage({
            model: app.me
        }));
    },
    loginPage: function() {
        app.trigger('page', new LoginPage({
            model: app.me
        }));
    },

    detailsPage: function() {
        app.trigger('page', new DetailsPage({
            model: app.me
        }));
    },

    modal: function() {
        app.trigger('page', new Modal({
            model: app.me
        }));
    },

    menu: function() {
        app.trigger('page', new Menu({
            model: app.me
        }));
    }

    // collectionDemo: function () {
    //     app.trigger('page', new CollectionDemo({
    //         model: app.me,
    //         collection: app.people
    //     }));
    // },

    // info: function () {
    //     app.trigger('page', new InfoPage({
    //         model: app.me
    //     }));
    // },

    // personAdd: function () {
    //     app.trigger('page', new PersonAddPage());
    // },

    // personEdit: function (id) {
    //     app.trigger('page', new PersonEditPage({
    //         id: id
    //     }));
    // },

    // personView: function (id) {
    //     app.trigger('page', new PersonViewPage({
    //         id: id
    //     }));
    // },

    // catchAll: function () {
    //     this.redirectTo('');
    // }
});