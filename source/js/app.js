var app = require('ampersand-app');
var dom = require('ampersand-dom');
var _ = require('lodash');
var Router = require('./router');
var MainView = require('./views/main');
var Me = require('./models/me');
// var People = require('./models/persons');
var domReady = require('domready');
var attachFastClick = require('fastclick');


// attach our app to `window` so we can
// easily access it from the console.
window.app = app;

// Attaches fastclick to body, removes 300ms delay on mobile
// TODO: Check the place where this should be initiated. This might be the wrong place
attachFastClick(document.body);


// Extends our main app singleton
app.extend({
    me: new Me(),
    // people: new People(),
    router: new Router(),
    // This is where it all starts
    init: function() {
        // Create and attach our main view
        this.mainView = new MainView({
            model: this.me,
            el: document.getElementById("ampersand-app")
        });

        // this kicks off our backbutton tracking (browser history)
        // and will cause the first matching handler in the router
        // to fire.
        this.router.history.start({ pushState: true });
        // this.router.reload();
    },
    // This is a helper for navigating around the app.
    // this gets called by a global click handler that handles
    // all the <a> tags in the app.
    // it expects a url pathname for example: "/costello/settings"
    navigate: function(page) {
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.history.navigate(url, {
            trigger: true
        });
    }
});

// run it on domReady
domReady(_.bind(app.init, app));