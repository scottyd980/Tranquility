Tranquility.Router.map(function() {
  this.route('about', { path: '/about' });
  this.resource('auth', function() {
  	this.route('login', { path: '/login' });
  	this.route('logout', { path: '/logout' });
  	this.route('signup', { path: '/signup' });
  });

  this.resource('todos', function () {
    this.route('index', { path: '/' });
  });
});
