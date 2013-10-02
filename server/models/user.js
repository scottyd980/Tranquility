module.exports = function(mongoose) {
	var bcrypt = require('bcrypt'),
		Schema = mongoose.Schema;

	var UserSchema = new Schema({
		fullname: {type: String, required: true},
		username: {type: String, required: true, index: { unique: true }},
		email: {type: String, required: true},
		password: {type: String, required: true},
	});

	UserSchema.methods.comparePassword = function(candidatePassword, callback) {
	    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
	    	if( err ) { return callback(err); }
	    	callback(null, isMatch);
	    });
	};

	UserSchema.pre('save', function(next) {
		var user = this;

		if( !user.isModified('password') ) { return next(); }

		bcrypt.genSalt(10, function(err, salt) {
			if( err ) { return next(err); }

      		bcrypt.hash(user.password, salt, function(err, hash) {
      			if( err ) { return next(err); }

      			user.password = hash;
      			next();
      		});

      	});

	});

	var User = mongoose.model('User', UserSchema);

  return User;
};
