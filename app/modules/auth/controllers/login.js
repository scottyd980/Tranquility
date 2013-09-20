Tranquility.AuthLoginController = Ember.Controller.extend({
	actions: {
		login: function() {
			var data = this.getProperties('username', 'password'),
				self = this;
			
			Ember.$.post('http://localhost:3000/login.json', data).then(function(response) {
				
				self.set('errorMessage', null);

				if( response.success ) {
					self.set('token', response.token);
				} else {
					self.set('errorMessage', response.message);
				}

			});
		}
	},
	reset: function() {
		this.setProperties({
			username: "",
			password: "",
			errorMessage: null
		});
	}
});