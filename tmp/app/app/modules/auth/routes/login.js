Tranquility.AuthLoginRoute = Tranquility.AuthenticationRoute.extend({
	exit: function() {
		var loginController = this.controllerFor('auth.login');
		loginController.reset();
	}
});