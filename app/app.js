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
    if ( !Tranquility.AuthManager.isAuthenticated() ) {
      this.redirectToLogin(transition);
    }
  },

  redirectToLogin: function(transition) {
    var loginController = this.controllerFor('auth.login');
    loginController.set('attemptedTransition', transition);
    this.transitionTo('auth.login');
  },

  getJSONWithToken: function(url) {
    return $.getJSON(url);
  },

  events: {
    error: function(reason, transition) {
      this.redirectToLogin(transition);
    }
  }
});

Tranquility.AuthenticationRoute = Ember.Route.extend({

  beforeModel: function(transition) {
    if (Tranquility.AuthManager.isAuthenticated()) {
      this.transitionTo('index');
    }
  }
  
});

// Load mixins/components/objects before anything else
require('mixins/*');
require('components/*');
require('objects/*');

require('store');
require('modules/*/models/*');
require('modules/*/routes/*');
require('modules/*/controllers/*');
require('modules/*/views/*');
require('helpers/*');
require('router');
