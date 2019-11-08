const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const session = require("express-session");

//direct to sessions/new
router.get("/new", (req, res) => {
  res.render("sessions/new.ejs");
});

//create new
router.post("/", (req, res) => {
  User.findOne({ name: req.body.name }, (err, foundUser) => {
    if (req.body.password === foundUser.password) {
      req.session.currentUser = foundUser;
      res.redirect("/");
    } else {
      res.redirect("/");
    }
  });
});

//delete
router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
