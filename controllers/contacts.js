//Dependencies
const express = require("express");
const router = express.Router();

//
const Contact = require("../models/contacts.js");

//send to contact page
router.get("/", (req, res) => {
  res.render("contacts/new.ejs");
});
//export Router
module.exports = router;
