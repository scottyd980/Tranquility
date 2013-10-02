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
      this.transitionTo('index');
    }
  }
  
});

// Load mixins/components/objects before anything else


})();

(function() {

Tranquility.TodoItemComponent = Ember.Component.extend({
  item: null,

  keyDown: function (event) {
    if (event.which === 13) {
      event.preventDefault();

      var item = this.get('item'),
        editable = this.$('.todo-editable');
      item.set('name', editable.text());
      
      item.save();
      

      editable.prop('contenteditable', false).blur();
    }
  },

  actions: {
    edit: function () {
      this.$('.todo-editable').prop('contenteditable', true).focus();
    },

    delete: function () {
      var item = this.get('item');
      
      item.deleteRecord();
      //item.save();
      
    }
  }
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
      this.authenticate(token, authUserId);
  }  
},

  // Determine if the user is currently authenticated.
  isAuthenticated: function() {
    return !Ember.isEmpty(this.get('sessionToken.token')) && !Ember.isEmpty(this.get('sessionToken.user'));
},

  // Authenticate the user. Once they are authenticated, set the access token to be submitted with all
  // future AJAX requests to the server.
authenticate: function(token, userId) {
    $.ajaxSetup({
        headers: { 'token': token }
    });
    //var user = User.find(userId);
    this.set('sessionToken', Tranquility.SessionToken.create({
      token: token,
      user: userId
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
  } else {
      $.cookie('auth_token', this.get('sessionToken.token'));
      $.cookie('auth_user', this.get('sessionToken.user'));
  }
}.observes('sessionToken')
});

})();

(function() {

Tranquility.SessionToken = Ember.Object.extend({
  token: '',
  user: null
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
	actions: {
		logout: function() {
			Tranquility.AuthManager.reset();
			this.transitionTo('index');
		}
	}
});

})();

(function() {

Tranquility.AuthLoginController = Ember.Controller.extend({

    reset: function() {
      this.setProperties({
        username: "",
        password: "",
        errorMessage: ""
      });
    },

  actions: {
    login: function() {

      var self = this, data = this.getProperties('username', 'password');

      // Clear out any error messages.
      this.set('errorMessage', null);

      $.post('/api/auth/login.json', data).then(function(response) {

        if (response.success) {
          Tranquility.AuthManager.authenticate(response.token, response.user);

          var attemptedTransition = self.get('attemptedTransition');
          if (attemptedTransition) {
            attemptedTransition.retry();
            self.set('attemptedTransition', null);
          } else {
            // Redirect to 'index' by default.
            self.transitionToRoute('index');
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
			password: "",
			errorMessage: ""
		});
	},

	actions: {
		signup: function() {

			var self = this, data = this.getProperties('fullname', 'email', 'username', 'password');

			$.post('/api/auth/signup.json', { user: data }, function(results) {
				// Login the user once saved
				if(!results.success) {
					console.log(results.message);
				} else {
					Tranquility.AuthManager.authenticate(results.token, results.user_id);
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
	}.property('Tranquility.AuthManager.sessionToken')
});

})();

(function() {

Tranquility.IndexView = Ember.View.extend({
});

})();

(function() {

Ember.Handlebars.registerBoundHelper('wordCount', function (value) {
  var ret;
  if (typeof value === 'string' && value.length) {
    return ((ret = value.trim().match(/\s+/g).length) > 0) ? (ret + 1) : 1;
  }
  return '0';
});

})();

(function() {

Tranquility.Router.map(function() {
  this.route('about', { path: '/about' });
  this.resource('auth', function() {
  	this.route('login', { path: '/login' });
  	this.route('logout', { path: '/logout' });
  	this.route('signup', { path: '/signup' });
  });
});


})();