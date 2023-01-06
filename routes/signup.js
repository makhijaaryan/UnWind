const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
var path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const Users = require("../schemas/User");

app.get("/", function (req, res) {
  res.sendFile(path.resolve('public/html/signup.html'));
});
app.post("/", async function (req, res) {
  console.log(req.body);
  var user_type = req.body.role;
  var name = req.body.name;
  var email = req.body.email;
  var details = Number(req.body.details);
  var userName = req.body.username;
  var pass = req.body.password;
  var gender = req.body.gender;
  
  const user = new Users({
    name: name,
    email: email,
    details: details,
    username: userName,
    password: pass,
    gender: gender,
    type: user_type,
  });
  // console.log(user);
  const save = await user.save();
  console.log(save);
  res.redirect("/");
});
module.exports = app;
