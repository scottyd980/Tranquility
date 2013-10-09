Tranquility.ApplicationController = Ember.Controller.extend({
	isAuthenticated: function() {
		return Tranquility.AuthManager.isAuthenticated()
	}.property('Tranquility.AuthManager.sessionToken'),

	currentPathDidChange: function() {
	  window.scrollTo(0,0);
	}.observes('currentPath'),

	menuToggled: false,

	actions: {
		toggleMenu: function() {

			if( !this.get('menuToggled') ) {
				$('body').addClass('cbp-spmenu-push-toright');
				$('.cbp-spmenu-left').addClass('cbp-spmenu-open');
				this.set('menuToggled', true);
			} else {
				$('body').removeClass('cbp-spmenu-push-toright');
				$('.cbp-spmenu-left').removeClass('cbp-spmenu-open');
				this.set('menuToggled', false);
			}
		}
	}
});