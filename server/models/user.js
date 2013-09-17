module.exports = function(mongoose) {
  var User = mongoose.model('User', {
    username: String,
    email: String,
    password: String
  });

  // Message.schema.path('title').validate(function(value) {
  //   return value.toString().length < 10;
  // }, 'Too long');

  return User;
};
