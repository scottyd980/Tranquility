Tranquility.ApplicationController = Ember.Controller.extend({
	isAuthenticated: function() {
		return Tranquility.AuthManager.isAuthenticated()
	}.property('Tranquility.AuthManager.sessionToken'),

	currentPathDidChange: function() {
	  window.scrollTo(0,0);
	}.observes('currentPath'),

	menuToggled: false,

	pushBody: function() {
		if (this.get('menuToggled')){
	    	$('body').addClass('cbp-spmenu-push-toright');
	    } else {
	    	$('body').removeClass('cbp-spmenu-push-toright');
	    }
	},

	actions: {
		toggleMenu: function() {

			this.toggleProperty('menuToggled');
			this.pushBody();

		}
	}
});