Tranquility.ApplicationRoute = Ember.Route.extend({
	init: function() {
		this._super();
		Tranquility.AuthManager = Tranquility.Authenticator.create();
	},

	actions: {
		logout: function() {
			Tranquility.AuthManager.reset();
		}
	}
});