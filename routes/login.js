const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
var path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const Users = require("../schemas/User");
// app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(path.resolve("public/html/login.html"));
});
app.post("/", async function (req, res) {
  console.log(req.body);
  
  var userName = req.body.username;
  var pass = req.body.password;

  // fetch the user from db
  const user = await Users.findOne({ username: userName, password: pass });
  console.log(user);
  if (user) {
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
  //   const user = new Users({
  //     name: name,
  //     email: email,
  //     phoneNumber: number,
  //     username: userName,
  //     password: pass,
  //     gender: gender,
  //     type: user_type,
  //   });
  //   // console.log(user);
  //   const save = await user.save();
  //   console.log(save);
  //   res.redirect("/");
});
module.exports = app;
