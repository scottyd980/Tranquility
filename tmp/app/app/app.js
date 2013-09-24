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
	beforeModel: function(transition) {
		if (!this.controllerFor('auth.login').get('token')) {
			this.redirectToLogin(transition);
		}
	},
	redirectToLogin: function(transition) {
		var loginController = this.controllerFor('auth.login');
		loginController.set('attemptedTransition', transition);
		this.transitionTo('auth.login');
  	},
  	getJSONWithToken: function(url) {
		var token = this.controllerFor('auth.login').get('token');
		return $.getJSON(url, { token: token });
	},
	actions: {
	    error: function(reason, transition) {
			if (reason.status === 401) {
				this.redirectToLogin(transition);
			} else {
				this.redirectToLogin(transition);
			}
	    }
  	}
});

Tranquility.AuthenticationRoute = Ember.Route.extend({
	beforeModel: function(transition) {
		if (this.controllerFor('auth.login').get('token')) {
			this.transitionTo('index');
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
