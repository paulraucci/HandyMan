//Dependencies
const express = require("express");
const router = express.Router();

//
const Contact = require("../models/contacts.js");

//create
router.post("/", (req, res) => {
  Contact.create(req.body, (error, createdContact) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

//

//send to contact page
router.get("/", (req, res) => {
  res.render("contacts/new.ejs");
});
//export Router
module.exports = router;
