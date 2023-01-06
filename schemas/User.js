const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  creationTime: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  certDetails: {
    type: String,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  score: {
    type: Number,
    default: 0,
  },
  prev_score: { 
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Users", UserSchema);
