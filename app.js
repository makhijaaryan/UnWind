const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
var path = require("path");
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));


const signUpRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const selftestRoute = require("./routes/selftest");

app.use("/signUp", signUpRoute);
app.use("/login", loginRoute);
app.use("/selftest", selftestRoute);
app.use(express.static("public"));

// app.get("/",function (req, res) {
//   res.sendFile(path.resolve("html/index.html"));
// });

app.get("/aboutus", function (req, res) {
  res.sendFile(path.resolve("public/html/aboutus.html"));
});
// app.get("/selftest", function (req, res) {
//   res.sendFile(path.resolve("public/html/selftest.html"));
// });

mongoose.connect(
 "mongodb+srv://dbadmin:dbpass@cluster0.thrkwwc.mongodb.net/unwind?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function () {
    console.log("Connected to Database");
  }
);

app.listen(3000, function () {
  console.log("Server Started On Port 3000");
});
