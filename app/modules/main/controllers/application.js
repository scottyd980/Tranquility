Tranquility.ApplicationController = Ember.Controller.extend({
	isAuthenticated: function() {
		return Tranquility.AuthManager.isAuthenticated()
	}.property('Tranquility.AuthManager.sessionToken'),
	currentPathDidChange: function() {
	  window.scrollTo(0,0);
	}.observes('currentPath')
});