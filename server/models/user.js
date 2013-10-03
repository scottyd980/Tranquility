module.exports = function(mongoose) {
	var bcrypt = require('bcrypt'),
		uniqueValidator = require('mongoose-unique-validator'),
		Schema = mongoose.Schema;

	var UserSchema = new Schema({
		fullname:  { type: String, required: true },
		username:  { type: String, required: true, unique: true },
		email:  { type: String, required: true, unique: true },
		password:  { type: String, required: true },
		createDate: { type: Date, default: Date.now }
	});

	UserSchema.path('username').index({ unique: true });
	UserSchema.path('email').index({ unique: true });

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

	UserSchema.plugin(uniqueValidator, { mongoose: mongoose });

	var User = mongoose.model('User', UserSchema);

  return User;
};
