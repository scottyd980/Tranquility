/* global window, Ember */
window.Tranquility = Ember.Application.create({
	LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

Tranquility.AuthenticatedRoute = Ember.Route.extend({
	redirectToLogin: function(transition) {
		var loginController = this.controllerFor('auth.login');
		loginController.set('attemptedTransition', transition);
		this.transitionTo('auth.login');
		loginController.set('errorMessage', 'You must login first to access that page.');
  	},
	actions: {
	    error: function(reason, transition) {
			if (reason.status === 401) {
			this.redirectToLogin(transition);
			} else {
			alert('Something went wrong');
			}
	    }
  	}
});

// Load mixins and components before anything else
require('mixins/*');
require('components/*');

require('store');
require('modules/*/models/*');
require('modules/*/routes/*');
require('modules/*/controllers/*');
require('modules/*/views/*');
require('helpers/*');
require('router');
