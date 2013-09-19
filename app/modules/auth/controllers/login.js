Tranquility.AuthLoginController = Ember.Controller.extend({
	actions: {
		login: function() {
			var data = this.getProperties('username', 'password');
			Ember.$.post('http://localhost:3000/login.json', data).then(function(response) {
				alert('got response');
			});
		}
	}
});