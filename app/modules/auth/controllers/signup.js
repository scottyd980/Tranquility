Tranquility.AuthSignupController = Ember.Controller.extend({
	actions: {
		signup: function() {
			var store = this.get('store');

			var user = store.createRecord('user', {
				fullname: 	this.get('fullname'),
				email: 		this.get('email'),
				username: 	this.get('username'),
				password: 	this.get('password') 
			});

			user.save();

			//console.log(store);
		}
	}
});