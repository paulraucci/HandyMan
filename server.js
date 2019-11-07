//Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose").set("debug", true);
const methodOverride = require("method-override");
const sessions = require("express-session");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/handyman";

//Port
const port = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(
  sessions({
    secret: "handyman",
    resave: false,
    saveUninitialized: false
  })
);

//controller to contacts.js
const contactsController = require("./controllers/contacts.js");
app.use("/contacts", contactsController);

//controller to reviews.js
const reviewsController = require("./controllers/reviews.js");
app.use("/reviews", reviewsController);

//controller to users.js
const usersController = require("./controllers/users.js");
app.use("/users", usersController);

//controller to sessions.js
const sessionsController = require("./controllers/sessions.js");
app.use("/sessions", sessionsController);

//Index
app.get("/", (req, res) => {
  res.render("index.ejs", {
    currentUser: req.session.currentUser
  });
});

//nodemon console.log
app.listen(port, () => {
  console.log("Andre", port);
});

//Mongoose database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});
