// This app view is responsible for rendering all content that goes into
// <html>. It's initted right away and renders itself on DOM ready.
var app = require('ampersand-app');
var setFavicon = require('favicon-setter');
var View = require('ampersand-view');
var dom = require('ampersand-dom');
var ViewSwitcher = require('ampersand-view-switcher');
var _ = require('lodash');
var domify = require('domify');
var localLinks = require('local-links');
var bodyTmpl = require('../templates/includes/body.hbs');
var headTmpl = require('../templates/includes/head.hbs');
var MenuDialog = require('./dialogs/menu');
var WorklistDialog = require('./dialogs/worklist');


module.exports = View.extend({
    template: bodyTmpl,
    autoRender: true,
    initialize: function () {
        // this marks the correct nav item selected
        this.listenTo(app, 'page', this.handleNewPage);
    },
    events: {
        'click a[href]': 'handleLinkClick',
        'click [data-hook=menu-open]': 'handleMenuOpenClick',
        'click [data-hook=worklist-open]': 'handleWorkListOpenClick'
    },
    render: function () {
        var self = this;
        // some additional stuff we want to add to the document head
        document.head.appendChild(domify(headTmpl()));

        // main renderer
        this.renderWithTemplate(this);

        // init and configure our page switcher
        this.pageSwitcher = new ViewSwitcher(this.queryByHook('js-app-container'), {
            show: function (newView, oldView) {
                // it's inserted and rendered for me
                document.title = _.result(newView, 'pageTitle') || 'test';
                document.scrollTop = 0;

                // add a class specifying it's active
                setTimeout(function() {
                  dom.addClass(newView.el, 'active');
                }, 500);

                // store an additional reference, just because
                app.currentPage = newView;
            }
        });
        this.modalSwitcher = new ViewSwitcher(this.queryByHook("modal-container"), {
            show: function (view) {
                dom.addClass(document.body, "has-modal");
                view.listenTo(view, "dialog:closed", function () {
                    self.modalSwitcher.clear();
                });
            }, hide: function () {
                dom.removeClass(document.body, "has-modal");
            }
        });

        // Samuel did this to create an animated view.
        // this.pageSwitcher = new ViewSwitcher(this.queryByHook('js-app-container'), {
        //     // whether or not to wait for remove to be done before starting show
        //     waitForRemove: true,
        //     // here we provide a few things to do before the element gets
        //     // removed from the DOM.
        //     hide: function (oldView, cb) {
        //         // it's inserted and rendered for me so we'll add a class
        //         // that has a corresponding CSS transition.
        //         oldView.el.classList.add('animateOut');
        //         // give it time to finish (yes there are other ways to do this)
        //         setTimeout(cb, 600);
        //     },
        //     // here we provide a few things we'd like to do each time
        //     // we switch pages in the app.
        //     show: function (newView) {
        //         // it's inserted and rendered for me
        //         document.title = newView.pageTitle || 'app name';
        //         document.body.scrollTop = 0;

        //         // store an additional reference, just because
        //         app.currentPage = newView;

        //         newView.el.classList.add('animateIn');
        //     }
        // });

        return this;
    },

    handleNewPage: function (view) {
        if (this.modalSwitcher.current) {
            this.modalSwitcher.clear();
        }
        // tell the view switcher to render the new one
        this.pageSwitcher.set(view);

        // mark the correct nav item selected
        this.updateActiveNav();
    },

    // Handles all `<a>` clicks in the app not handled
    // by another view. This lets us determine if this is
    // a click that should be handled internally by the app.
    handleLinkClick: function (e) {
        // This module determines whether a click event is
        // a local click (making sure the for modifier keys, etc)
        // and dealing with browser quirks to determine if this
        // event was from clicking an internal link. That we should
        // treat like local navigation.
        var localPath = localLinks.pathname(e);

        if (localPath) {
            e.preventDefault();
            app.navigate(localPath);
        }
    },

    showModal: function (view, done) {
        view.listenTo(view, "dialog:closed", done);
        this.modalSwitcher.set(view);
    },

    handleMenuOpenClick: function (e) {
        e.preventDefault();
        var menuDialog =  new MenuDialog();
        this.showModal(menuDialog);
    },

    handleWorkListOpenClick: function (e) {
        e.preventDefault();
        var worklistDialog =  new WorklistDialog();
        this.showModal(worklistDialog);
    },

    updateActiveNav: function () {
      console.log("updateActiveNav")
        var path = window.location.pathname.slice(1);

        this.queryAll('.ja-nav a[href]').forEach(function (aTag) {
            var aPath = aTag.pathname.slice(1);

            if ((!aPath && !path) || (aPath && path.indexOf(aPath) === 0)) {
                dom.addClass(aTag.parentNode, 'active');
            } else {
                dom.removeClass(aTag.parentNode, 'active');
            }
        });
    }
});
