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
<<<<<<< HEAD
				if(!results.success) {
					console.log(results.message);
				} else {
					Tranquility.AuthManager.authenticate(results.token, results.user_id);
					self.transitionToRoute('index');
				}
=======
				Tranquility.AuthManager.authenticate(results.token, results.user_id);
				// replace once remember me works.
				// Tranquility.AuthManager.authenticate(results.token, results.user_id, false);
				
				self.transitionToRoute('index');
>>>>>>> 88f9c9e4727d5a51dfd34cee8676a686f116f7c9
		    });
		}
	}
});
