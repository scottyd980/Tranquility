Tranquility.IssuePanelComponent = Ember.Component.extend(Tranquility.TypeSupport, {
	classNames: ['panel'],
    classTypePrefix: ['panel'],
    icon: (function () {
    	var type = this.get('type');
    	switch( type ) {
    		case "default":
    			return false;
    		case "primary":
    			return "icon-tasks";
    		case "success": 
    			return "icon-certificate"
    		case "info":
    			return "icon-cogs";
    		case "warning":
    			return "icon-cogs";
    		case "danger":
    			return "icon-bug";
    		default:
    			return false;
    	}
    }).property('type').cacheable()
});