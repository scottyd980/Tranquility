Tranquility.AboutRoute = Tranquility.AuthenticatedRoute.extend({
	model: function() {
		var loginController = this.controllerFor('auth.login'),
		token = loginController.get('token');
			//console.log(  'hello' );
		return this.getJSONWithToken('/about.json');
		//return $.getJSON('/about.json', { token: token });
	}
});