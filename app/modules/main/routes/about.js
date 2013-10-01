Tranquility.AboutRoute = Tranquility.AuthenticatedRoute.extend({
	model: function() {
		return this.getJSONWithToken('/about.json');
	}
});