var PORT = 3000,
  SSL_PORT = 3443,
  API_URL = '/api',
  CONNECTION_STRING = 'mongodb://localhost/tranquility'; // mongodb://user:pass@host:port/db?options...

var fs = require('fs');
var http = require('http');
var https = require('https');
var mongoose = require('mongoose');
var express = require('express');
var bcrypt = require('bcrypt');
var user = require('./models/user')(mongoose);
var jwt = require('jwt-simple');

var tokenSecret = "KXlZ00lIt6W9RsA9L72Wj13XeLjqjMIu";

var ssl_options = false;
// var ssl_options = {
//  key: fs.readFileSync('server-key.pem'),
//  cert: fs.readFileSync('server-crt.pem')
// };

mongoose.connect(CONNECTION_STRING);
var db = mongoose.connect;

  function emberfyModel(app, model, modelName, modelPlural) {
    app.get(API_URL + '/' + modelPlural, function(req, res) {
      var ormQuery = req.query;
      for (key in ormQuery) {
        if (ormQuery.hasOwnProperty(key)) {
          ormQuery[key] = new RegExp(req.query[key], 'i');
        }
      }
      model.find(ormQuery ? ormQuery : {}, function(err, items) {
        if (err) {
          res.send(500, err);
        } else {
          var obj = {};
          obj[modelPlural] = items;
          res.send(obj);
        }
      });
    });

    app.get(API_URL + '/' + modelPlural + '/:id', function(req, res) {
      model.findById(req.params.id, function(err, item) {
        if (err) {
          res.send(500, err);
        } else {
          var obj = {};
          obj[modelName] = item;
          res.send(obj);
        }
      });
    });

    app.post(API_URL + '/' + modelPlural, function(req, res) {
      var newModel = new model(req.body[modelName]);
      newModel.save(function(err, item) {
        if (err) {
          res.send(500, err);
        } else {
          var obj = {};
          obj[modelName] = item;
          res.send(obj);
        }
      });
    });

    app.put(API_URL + '/' + modelPlural + '/:id', function(req, res) {
      model.update({
        _id: req.params.id
      }, req.body[modelName], function(err, item) {
        if (err) {
          res.send(500, err);
        } else {
          var obj = {};
          obj[modelName] = item;
          res.send(obj);
        }
      });
    });

    app.delete(API_URL + '/' + modelPlural + '/:id', function(req, res) {
      model.remove({
        _id: req.params.id
      }, function(err) {
        if (err) {
          res.send(500, err);
        } else {
          res.send(200);
        }
      });
    });
  }

var app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  // If you want to serve your Ember page as well
  app.use('/', express.static('/Users/agifford/Workspace/test/dist'));
  app.use(app.router);
});

// All options return the same thing
app.options('*', function(req, res) {
  res.send(200);
});

function NotAuthorized(msg) {
  this.name = 'NotAuthorized';
  this.msg = msg;
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}

function authorize(req, res, next) {
  var userToken = req.body.token || req.param('token') || req.headers.token;
  if( userToken === undefined ) {
    return next(new NotAuthorized('You must be logged in to access this content.'));
  } else {
    var decoded = jwt.decode(userToken, tokenSecret);
    user.findOne({ 'username' : decoded.username, '_id' : decoded.user_id }, function(err, person){
      if( err ) {
        return next(new NotAuthorized('You must be logged in to access this content.'));
      } else if( person === null ){
        return next(new NotAuthorized('There was a problem with your account information. Please login again.'))
      } else {
        next();
      }
    });
  }
}

app.post('/api/auth/login', function(req, res) {

  var body = req.body,
      username = body.username,
      password = body.password;

  if( username != null && password != null ) {
    user.findOne({ 'username' : username }, '_id email password', function(err, person){
      if( err ) {
        res.send({
          success: false,
          message: 'An unexpected error occurred. Please try again later. If this error continues to occur, please contact support.'
        });
      } else if( person === null ) {
        res.send({
          success: false,
          message: 'Invalid username/password.'
        });
      } else {

        person.comparePassword(password, function(err, isMatch) {
          if( err ) {
            res.send({
              success: false,
              message: 'Invalid username/password.'
            });
          } else if( isMatch === true ) {
            var currentToken = jwt.encode({username: username, user_id: person._id}, tokenSecret);
            res.send({
              success: true,
              token: currentToken,
              user: person._id
            });
          } else {
            res.send({
              success: false,
              message: 'Invalid username/password.'
            });
          }
        });

      }
    });
  } else {
    res.send({
      success: false,
      message: 'Username/password are required.'
    });
  }
});

app.post('/api/auth/signup', function(req, res) {

  var body = req.body,
      fullname = body.user.fullname,
      username = body.user.username,
      email = body.user.email,
      password = body.user.password;

  // Can remove this once figuring out how to pass back mongoose validation errors to the front end.
  if ( fullname != null && username != null && email != null && password != null ) {
    
    user.create({fullname: fullname, username: username, email: email, password: password}, function(err, person) {
      if( err ) {
        res.send({
          success: false,
          message: 'An unexpected error occurred.',
          err: err
        });
      } else {
        var currentToken = jwt.encode({username: username, user_id: person._id}, tokenSecret);
        res.send({
          success: true,
          token: currentToken,
          user_id: person._id
        });
      }
    });
    
  } else {
    res.send({
      success: false,
      message: 'Invalid user.'
    });
  }

});

app.get('/about.json', authorize, function(req, res) {
  res.send({
    success: true
  });
});

app.use( function( err, req, res, next ) {
  if( err instanceof NotAuthorized) {
    res.send(401, { success: false, error: err.msg });
    return false;
  } else {
    next(err);
  }
});

app.use(express.static(__dirname + '/../dist/'));

/*
  ADD YOUR MODELS HERE
*/
//emberfyModel(app, require('./models/message')(mongoose), 'message', 'messages');
//emberfyModel(app, user, 'user', 'users');


http.createServer(app).listen(PORT);
if (ssl_options) {
  https.createServer(ssl_options, app).listen(SSL_PORT);
}
