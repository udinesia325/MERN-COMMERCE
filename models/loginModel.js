const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: {
    type: String,
    required:true
  },
  password:{
    type: String,
    required:true
  },
  role:{
    type: String,
    enum:["user","admin","superadmin"],
    default:"user"
  },
  active:{
   type: Boolean,
   default: false
  }
});

module.exports = mongoose.model("login", schema);
