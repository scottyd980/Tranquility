module.exports = function(mongoose) {
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
	User.schema.path('password').required(true);

  return User;
};
