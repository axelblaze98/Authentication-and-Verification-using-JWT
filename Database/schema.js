const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/api");

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

var user = mongoose.model("user", userSchema);

module.exports = user;