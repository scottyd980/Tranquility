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

			var user = this.getProperties('fullname', 'email', 'username', 'password');
			$.post('/api/users', { user: user }, function(results) {
				App.AuthManager.authenticate(results.token, results._id);
				router.transitionTo('index');
		    });
			// Login the user once saved
		}
	}
});