Tranquility.AuthSignupController = Ember.Controller.extend({
	reset: function() {
		this.setProperties({
			fullname: "",
			email: "",
			username: "",
			password: "",
			errorMessage: ""
		});
	},

	actions: {
		signup: function() {

			var self = this, data = this.getProperties('fullname', 'email', 'username', 'password');

			$.post('/api/auth/signup.json', { user: data }, function(results) {
				// Login the user once saved
				Tranquility.AuthManager.authenticate(results.token, results.user_id);
				// replace once remember me works.
				// Tranquility.AuthManager.authenticate(results.token, results.user_id, false);
				
				self.transitionToRoute('index');
		    });
		}
	}
});
