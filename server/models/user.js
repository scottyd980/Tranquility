module.exports = function(mongoose) {
	var bcrypt = require('bcrypt');

	var User = mongoose.model('User', {
		fullname: String,
		username: String,
		email: String,
		password: String
	});

	// Message.schema.path('title').validate(function(value) {
	//   return value.toString().length < 10;
	// }, 'Too long');

	User.schema.path('fullname').required(true);
	User.schema.path('username').required(true);
	User.schema.path('email').required(true);
	
	// User.schema.pre('save', function(next) {
	// 	var user = this;

	// 	if( !user.isModified('password') ) { return next(); }

	// 	bcrypt.genSalt(10, function(err, salt) {
	// 		if( err ) { return next(err); }

 //      		bcrypt.hash(password, salt, function(err, hash) {
 //      			if( err ) { return next(err); }

 //      			user.password = hash;
 //      			next();
 //      		});

 //      	});

	// });

	// User.schema.methods.comparePassword = function(candidatePassword, next) {
	//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
	//     });
	// };

  return User;
};
