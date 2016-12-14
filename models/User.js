var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: { type: String, lowercase: true, unique: true },
	fullname: String,
  email: String
});

mongoose.model('User', UserSchema);
