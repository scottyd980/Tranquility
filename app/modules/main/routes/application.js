Tranquility.ApplicationRoute = Ember.Route.extend({
	init: function() {
		this._super();
		Tranquility.AuthManager = Tranquility.Authenticator.create();
	},

	renderTemplate: function( controller, model ) {
		var loggedIn = controller.get('isAuthenticated');

		if( loggedIn ) {
			this.render('userapplication');
		} else {
			this.render('guestapplication');
		}
	},

	actions: {
		logout: function() {
			Tranquility.AuthManager.reset();
			this.transitionTo('index');
		}
	}
});