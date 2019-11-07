const express = require("express");
const router = express.Router();
const User = require("../models/users.js");

//log in
router.post("/users/login", (req, res) => {
  User.findOne({ name: req.body.name }, (err, foundUser) => {
    if ((req.body.password, foundUser.password)) {
      req.body.currentUser === foundUser;
      res.redirect("/users/login");
    } else {
      res.send("wrong password");
    }
  });
});
//log in page
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});
//new
router.get("/new", (req, res) => {
  res.render("users/new.ejs");
});

//create
router.post("/", (req, res) => {
  req.body.name = req.body.name;
  req.body.password = req.body.password;

  User.create(req.body, (error, createdUser) => {
    res.redirect("/");
  });
});
module.exports = router;
