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
   // Tranquility.__container__.lookup("route:application").transitionTo('index');
    Ember.run.sync();
    Ember.run.next(this, function(){
        this.set('sessionToken', null);
        $.ajaxSetup({
            headers: { 'token': null }
        });
        Tranquility.__container__.lookup("route:application").transitionTo('index');
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
