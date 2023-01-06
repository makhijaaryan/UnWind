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
  res.sendFile(path.resolve("public/html/selftest.html"));
});

app.post("/", async function (req, res) {
    console.log(req.body);
    const user = await Users.findOne({ username: req.body.username, email: req.body.email });
    console.log(user);
    if (user) {
        var total_score = parseInt(req.body.ques_1) + parseInt(req.body.ques_2) + parseInt(req.body.ques_3) + parseInt(req.body.ques_4) + parseInt(req.body.ques_5) + parseInt(req.body.ques_6) + parseInt(req.body.ques_7) + parseInt(req.body.ques_8) + parseInt(req.body.ques_9) + parseInt(req.body.ques_10);
        user.prev_score = user.score;
        user.score = total_score;
        const save = await user.save();
        console.log(save);
        res.redirect("/");
    } else {
        res.redirect("/selftest");
    }
});

module.exports = app;