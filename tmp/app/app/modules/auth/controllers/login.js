Tranquility.AuthLoginController = Ember.Controller.extend({
	needs: ['application'],

	token: localStorage.token,

	tokenChanged: function() {
		localStorage.token = this.get('token');
	}.observes('token'),

	authErrorChanged: function() {
		this.set('errorMessage', this.get('authError'));
	}.observes('authError'),

	actions: {
		login: function() {
			var data = this.getProperties('username', 'password'),
				self = this;
			
			$.post('http://localhost:3000/login.json', data).then(function(response) {

				self.set('errorMessage', null);
				if( response.success ) {

					self.set('token', response.token);
					self.set('authenticated', true);
					var attemptedTransition = self.get('attemptedTransition');

					if( attemptedTransition ) {
						attemptedTransition.retry();
						self.set('attemptedTransition', null);
					} else {
						self.transitionToRoute('index');
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
			errorMessage: null,
			authError: null
		});
	}
});