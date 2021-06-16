const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const buyer = require("./routes/api/buyer");
const seller = require("./routes/api/seller");
const passport = require("passport");
mongoose
  .connect("mongodb://localhost/test1")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/buyer", buyer);
app.use("/api/seller", seller);

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server running on port ${port}`));
