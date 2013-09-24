Tranquility.AboutRoute = Tranquility.AuthenticatedRoute.extend({
	model: function() {
		var loginController = this.controllerFor('auth.login'),
		token = loginController.get('token');
		return this.getJSONWithToken('/about.json');
	}
});