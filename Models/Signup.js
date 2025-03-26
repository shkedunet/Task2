const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
});

const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;
