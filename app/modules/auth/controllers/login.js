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
          
          // replace above once remember me works
          // Tranquility.AuthManager.authenticate(response.token, response.user, this.get('remember'));

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
