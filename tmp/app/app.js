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
	redirectToLogin: function(transition) {
		var loginController = this.controllerFor('auth.login');
		loginController.set('attemptedTransition', transition);
		this.transitionTo('auth.login');
  	},
	actions: {
	    error: function(reason, transition) {
			if (reason.status === 401) {
				this.redirectToLogin(transition);
			} else {
				this.redirectToLogin(transition);
			}
	    }
  	}
});

// Load mixins and components before anything else


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


Tranquility.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.FixtureAdapter.create()
});



})();

(function() {


Tranquility.Site = DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string')
});

Tranquility.Site.FIXTURES = [
  {
    id: 1,
    title: 'About',
    link: 'about'
  },
  {
    id: 2,
    title: 'Contact',
    link: 'contact'
  },
  {
    id: 3,
    title: 'Todos',
    link: 'todos'
  }
];



})();

(function() {


  Tranquility.Todo = DS.Model.extend({
    name: DS.attr('string'),
    isDone: DS.attr('boolean')
  });

  Tranquility.Todo.FIXTURES = [{
    id: 'a',
    name: 'Walk the dog',
    isDone: false
  }, {
    id: 'b',
    name: 'Buy groceries',
    isDone: false
  }]; 


})();

(function() {

Tranquility.AuthLoginRoute = Ember.Route.extend({
	setupController: function( controller, context ) {
		controller.reset();
	}
});

})();

(function() {

Tranquility.AboutRoute = Tranquility.AuthenticatedRoute.extend({
	model: function() {
		var loginController = this.controllerFor('auth.login'),
		token = loginController.get('token');
			//console.log(  'hello' );
		//return getJSONWithToken('/about.json');
		return $.getJSON('/about.json', { token: token });
	}
});

})();

(function() {

Tranquility.ApplicationRoute = Ember.Route.extend({

  model: function(params) { 
      return this.store.find('site'); 
  }
});


})();

(function() {

Tranquility.AuthenticatedRoute = Ember.Route.extend({
	redirectToLogin: function(transition) {
    var loginController = this.controllerFor('login');
    loginController.set('attemptedTransition', transition);
    this.transitionTo('login');
  },
	events: {
    error: function(reason, transition) {
      if (reason.status === 401) {
        this.redirectToLogin(transition);
      } else {
        alert('Something went wrong');
      }
    }
  }
});

})();

(function() {

Tranquility.TodosRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('todo'); 
  }
});


})();

(function() {

Tranquility.AuthLoginController = Ember.Controller.extend({
	actions: {
		login: function() {
			var data = this.getProperties('username', 'password'),
				self = this;
			
			Ember.$.post('http://localhost:3000/login.json', data).then(function(response) {
				
				self.set('errorMessage', null);

				if( response.success ) {
					self.set('token', response.token);
				} else {
					self.set('errorMessage', response.message);
				}

			});
		}
	},
	reset: function() {
		this.setProperties({
			username: "",
			password: "",
			errorMessage: null
		});
	}
});

})();

(function() {

Tranquility.AboutController = Ember.Controller.extend({
  someText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, mollis.'
});

})();

(function() {

Tranquility.ApplicationController = Ember.ArrayController.extend({
});

})();

(function() {

Tranquility.TodosIndexController = Ember.Controller.extend({
  needs: ['todos'],

  actions: {
    newTodo: function() { 
        this.store.createRecord('todo', {
          name: 'Get r done'
        }); 
    },

    clearDone: function() {
      var todos = this.get('controllers.todos');
      var allDone = todos.filter(function(todo) {
        return todo.get('isDone');
      });

      while (allDone.length > 0) {
        var todo = allDone.pop(); 
          todo.deleteRecord();
          //todo.save(); 
      }
    }
  }
});


})();

(function() {

Tranquility.TodosController = Ember.ArrayController.extend({
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
  	this.route('signup', { path: '/signup' });
  });

  this.resource('todos', function () {
    this.route('index', { path: '/' });
  });
});


})();