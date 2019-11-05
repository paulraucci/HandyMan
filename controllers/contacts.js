//Dependencies
const express = require("express");
const router = express.Router();

//
const Contact = require("../models/contacts.js");

//send to contact page
router.get("/", (req, res) => {
  res.send("contact page");
});
//export Router
module.exports = router;
