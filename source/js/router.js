var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var LoginPage = require('./pages/login');
var DetailsPage = require('./pages/details');
var DetailsPageDone = require('./pages/details-done');
var DetailsPage2 = require('./pages/details2');
var DetailsPage3 = require('./pages/details3');
var DetailsPage4 = require('./pages/details4');
var DetailsPage5 = require('./pages/details5');
var JobDetailsPage = require('./pages/job-details');
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
        'details-done': 'detailsPageDone',
        'details2': 'detailsPage2',
        'details3': 'detailsPage3',
        'details4': 'detailsPage4',
        'details5': 'detailsPage5',
        'modal': 'modal',
        'menu': 'menu',
        'jobdetails': 'jobDetails',
        // 'person/add': 'personAdd',
        // 'person/:id': 'personView',
        // 'person/:id/edit': 'personEdit',
        '(*path)': 'catchAll'
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
    detailsPageDone: function() {
        app.trigger('page', new DetailsPageDone({
            model: app.me
        }));
    },
    detailsPage2: function() {
        app.trigger('page', new DetailsPage2({
            model: app.me
        }));
    },
    detailsPage3: function() {
        app.trigger('page', new DetailsPage3({
            model: app.me
        }));
    },
    detailsPage4: function() {
        app.trigger('page', new DetailsPage4({
            model: app.me
        }));
    },

    detailsPage5: function() {
        app.trigger('page', new DetailsPage5({
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
    },

    jobDetails: function() {
        app.trigger('page', new JobDetailsPage({
            model: app.me
        }));
    },

    catchAll: function () {
        this.redirectTo('');
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
});