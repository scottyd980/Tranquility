Tranquility.AboutRoute = Tranquility.AuthenticatedRoute.extend({
	model: function() {
		return $.getJSON('/about.json');
	}
});