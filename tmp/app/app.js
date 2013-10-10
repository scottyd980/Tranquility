(function() {

/* global window, Ember */
window.Tranquility = Ember.Application.create({
	LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

Tranquility.AuthenticatedRoute = Ember.Route.extend({

  beforeModel: function(transition) {
    if ( !Tranquility.AuthManager.isAuthenticated() ) {
      this.redirectToLogin(transition);
    }
  },

  redirectToLogin: function(transition) {
    var loginController = this.controllerFor('auth.login');
    loginController.set('attemptedTransition', transition);
    this.transitionTo('auth.login');
  },

  getJSONWithToken: function(url) {
    return $.getJSON(url);
  },

  events: {
    error: function(reason, transition) {
      this.redirectToLogin(transition);
    }
  }
});

Tranquility.AuthenticationRoute = Ember.Route.extend({

  beforeModel: function(transition) {
    if (Tranquility.AuthManager.isAuthenticated()) {
      this.transitionTo('dashboard');
    }
  }
  
});

// Load mixins/components/objects before anything else


})();

(function() {

Tranquility.TypeSupport = Ember.Mixin.create({
  classTypePrefix: Ember.required(String),
  classNameBindings: ['typeClass'],
  type: 'default',
  typeClass: (function() {
    var pref, type;
    type = this.get('type');
    if (type == null) {
      type = 'default';
    }
    pref = this.get('classTypePrefix');
    return "" + pref + "-" + type;
  }).property('type').cacheable()
});

})();

(function() {

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

})();

(function() {

Tranquility.Authenticator = Ember.Object.extend({

  // Load the current user if the cookies exist and is valid
  init: function() {
    this._super();

    // This will need to be replaced with a cookie/session token
    var token = $.cookie('auth_token');

    // This will need to be replaced with a cookie/session user_id
    var authUserId  = $.cookie('auth_user');

    if (!Ember.isEmpty(token) && !Ember.isEmpty(authUserId)) {
      
      // get expiration date from cookies and set it as third parameter
      var remember = $.cookie('remember');
      this.authenticate(token, authUserId, remember);
  }  
},

  // Determine if the user is currently authenticated.
  isAuthenticated: function() {
    return !Ember.isEmpty(this.get('sessionToken.token')) && !Ember.isEmpty(this.get('sessionToken.user'));
},

  // Authenticate the user. Once they are authenticated, set the access token to be submitted with all
  // future AJAX requests to the server.
  
  // add "remember" paramater to function definition
authenticate: function(token, userId, remember) {
    $.ajaxSetup({
        headers: { 'token': token }
    });
    //var user = User.find(userId);
    this.set('sessionToken', Tranquility.SessionToken.create({
      token: token,
      user: userId,
      remember: remember
  }));
},

  // Log out the user
reset: function() {
    Tranquility.__container__.lookup("route:application").transitionTo('index');
    Ember.run.sync();
    Ember.run.next(this, function(){
        this.set('sessionToken', null);
        $.ajaxSetup({
            headers: { 'token': null }
        });
    });
},

  // Ensure that when the sessionToken changes, we store the data in cookies in order for us to load
  // the user when the browser is refreshed.
  sessionTokenObserver: function() {
    if (Ember.isEmpty(this.get('sessionToken'))) {

      $.removeCookie('auth_token');
      $.removeCookie('auth_user');
      $.removeCookie('remember');

    } else if( this.get('sessionToken.remember') ) {

      $.cookie('auth_token', this.get('sessionToken.token'), {expires: 365});
      $.cookie('auth_user', this.get('sessionToken.user'), {expires: 365});
      $.cookie('remember', true, {expires: 365});

    } else {

      $.cookie('auth_token', this.get('sessionToken.token'));
      $.cookie('auth_user', this.get('sessionToken.user'));
      $.cookie('remember', this.get('sessionToken.remember'));

    }
}.observes('sessionToken')
});


})();

(function() {

Tranquility.SessionToken = Ember.Object.extend({
  token: '',
  user: null,
  remember: false
});


})();

(function() {


// Tranquility.Store = DS.Store.extend({
//   revision: 12,
//   adapter: DS.FixtureAdapter.create()
// });

// Tranquility.ApplicationAdapter = DS.RESTAdapter.extend({
// 	host: 'http://localhost:3000',
// 	namespace: 'api',
// 	serializer: DS.RESTSerializer.extend({
// 		primaryKey: function(type) {
// 			return '_id';
// 		},
// 		serializeId: function(id) {
// 			return id.toString();
// 		}
// 	})
// });

})();

(function() {

// Tranquility.User = DS.Model.extend({
// 	fullname:	DS.attr('string'),
// 	email:		DS.attr('string'),
// 	username: 	DS.attr('string')
// });

})();

(function() {

Tranquility.AuthLoginRoute = Tranquility.AuthenticationRoute.extend({
	exit: function() {
		var loginController = this.controllerFor('auth.login');
		loginController.reset();
	}
});

})();

(function() {

Tranquility.AuthSignupRoute = Tranquility.AuthenticationRoute.extend({
	setupController: function( controller, context ) {
		controller.reset();
	}
});

})();

(function() {

Tranquility.AboutRoute = Tranquility.AuthenticatedRoute.extend({
	model: function() {
		return this.getJSONWithToken('/about.json');
	}
});

})();

(function() {

Tranquility.ApplicationRoute = Ember.Route.extend({
	init: function() {
		this._super();
		Tranquility.AuthManager = Tranquility.Authenticator.create();
	},

	renderTemplate: function( controller, model ) {
		var loggedIn = controller.get('isAuthenticated');

		if( loggedIn ) {
			this.render('userapplication');
		} else {
			this.render('guestapplication');
		}
	},

	actions: {
		logout: function() {
			Tranquility.AuthManager.reset();
			this.transitionTo('index');
		}
	}
});

})();

(function() {

Tranquility.DashboardRoute = Tranquility.AuthenticatedRoute.extend({

});

})();

(function() {

Tranquility.IndexRoute = Tranquility.AuthenticationRoute.extend();

})();

(function() {

Tranquility.AuthLoginController = Ember.Controller.extend({
    remember: true,

    reset: function() {
      this.setProperties({
        username: "",
        password: "",
        remember: true,
        errorMessage: ""
      });
    },

  actions: {
    login: function() {

      var self = this, data = this.getProperties('username', 'password');

      // Clear out any error messages.
      this.set('errorMessage', null);

      $.post('/api/auth/login', data).then(function(response) {

        if (response.success) {
          // Tranquility.AuthManager.authenticate(response.token, response.user);
          
          // replace above once remember me works
          Tranquility.AuthManager.authenticate(response.token, response.user, self.get('remember'));

          var attemptedTransition = self.get('attemptedTransition');
          if (attemptedTransition) {
            attemptedTransition.retry();
            self.set('attemptedTransition', null);
          } else {
            // Redirect to 'index' by default.
            self.transitionToRoute('dashboard');
          }
        } else {
          self.set('errorMessage', response.message);
        }

      });
    }
  }

});


})();

(function() {

Tranquility.AuthSignupController = Ember.Controller.extend({
	reset: function() {
		this.setProperties({
			fullname: "",
			email: "",
			username: "",
			password: ""
		});

		this.resetErrors();
	},

	resetErrors: function() {
		this.setProperties({
			errorMessage: "",
			fullnameError: "",
			emailError: "",
			passwordError: "",
			usernameError: ""
		});
	},

	actions: {
		signup: function() {

			var self = this, data = this.getProperties('fullname', 'email', 'username', 'password');

			this.resetErrors();

			$.post('/api/auth/signup', { user: data }, function(results) {

				// Login the user once saved
				if(!results.success) {
					
					var errors = results.err.errors;
					$.each(errors, function( key, value ) {
						switch(key) {
							case 'fullname':
								if( value.type === "required" ) {
									self.set( key + 'Error', 'A full name is required.');
								}
								break;
							case 'email':
								if( value.type === "required" ) {
									self.set( key + 'Error', 'An email is required.');
								} else if( value.type === "unique" ) {
									self.set( key + 'Error', 'That email is already in use.');
								}
								break;
							case 'username':
								if( value.type === "required" ) {
									self.set( key + 'Error', 'A username is required.');
								} else if( value.type === "unique" ) {
									self.set( key + 'Error', 'That username is already in use.');
								}
								break;
							case 'password':
								if(value.type === "required") {
									self.set( key + 'Error', 'A password is required.');
								}
								break;
							default:
								break;
						}
					});

				} else {
					//Tranquility.AuthManager.authenticate(results.token, results.user_id);
					Tranquility.AuthManager.authenticate(results.token, results.user_id, false);
					self.transitionToRoute('index');
				}

		    });
		}
	}
});


})();

(function() {

Tranquility.AboutController = Ember.Controller.extend({
  someText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, mollis.'
});

})();

(function() {

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

})();

(function() {

Tranquility.IndexView = Ember.View.extend({
});

})();

(function() {

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

})();

(function() {

Tranquility.Router.map(function() {
  this.route('about', { path: '/about' });
  this.route('pricing', { path: '/pricing' });
  this.route('dashboard', { path: '/dashboard' });
  this.resource('auth', function() {
  	this.route('login', { path: '/login' });
  	this.route('logout', { path: '/logout' });
  	this.route('signup', { path: '/signup' });
  });
});


})();