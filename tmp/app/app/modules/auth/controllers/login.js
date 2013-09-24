Tranquility.AuthLoginController = Ember.Controller.extend({
	token: localStorage.token,

	tokenChanged: function() {
		localStorage.token = this.get('token');
	}.observes('token'),

	actions: {
		login: function() {
			var data = this.getProperties('username', 'password'),
				self = this;
			
			$.post('http://localhost:3000/login.json', data).then(function(response) {

				self.set('errorMessage', null);
				if( response.success ) {

					self.set('token', response.token);
					var attemptedTransition = self.get('attemptedTransition');

					if( attemptedTransition ) {
						attemptedTransition.retry();
						self.set('attemptedTransition', null);
					} else {
						self.transitionToRoute('IndexRoute');
					}

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