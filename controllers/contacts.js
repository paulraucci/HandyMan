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
//show
router.get("/show", (req, res) => {
  Contact.find({}, (error, allContact) => {
    res.render("contacts/show.ejs", {
      Contact: allContact
    });
  });
});

//Edit
router.get("/:id/edit", (req, res) => {
  Contact.findById(req.params.id, (error, foundContact) => {
    if (error) {
      console.log(error);
    } else {
      res.render("contacts/edit.ejs", { Contact: foundContact });
    }
  });
});

//Put Route
router.put("/:id", (req, res) => {
  Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedProduct) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
    }
  );
});

//Delete
router.delete("/:id", (req, res) => {
  Contact.findByIdAndDelete(req.params.id, (error, deletedContact) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/contacts/show");
    }
  });
});

//send to contact page
router.get("/", (req, res) => {
  res.render("contacts/new.ejs");
});
//export Router
module.exports = router;
