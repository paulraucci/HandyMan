//Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//Port
const port = 3000;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

//controller to contacts.js
const contactsController = require("./controllers/contacts.js");
app.use("/contacts", contactsController);

//controller to reviews.js
const reviewsController = require("./controllers/reviews.js");
app.use("/reviews", reviewsController);

//Index
app.get("/", (req, res) => {
  res.send("index from server");
});

//nodemon console.log
app.listen(port, () => {
  console.log("Andre", port);
});

//Mongoose database
mongoose.connect("mongodb://localhost:27017/handyman", {
  useNewUrlParser: true
});

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});
