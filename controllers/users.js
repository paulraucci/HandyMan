const express = require("express");
const router = express.Router();
const User = require("../models/users.js");

//new
router.get("/new", (req, res) => {
  res.render("users/new.ejs");
});

//create new
router.post("/", (req, res) => {
  req.body.password = req.body.password;

  User.create(req.body, (error, createdUser) => {
    res.redirect("/");
  });
});

module.exports = router;
