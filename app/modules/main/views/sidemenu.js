Tranquility.SideMenuView = Ember.View.extend({
	didInsertElement: function() {
		var self = this;
        $('body').on('click', function(){
        	if( self.get('controller').get('menuToggled') ) {
        		self.get('controller').send('toggleMenu');
        	}
        });
	}
});