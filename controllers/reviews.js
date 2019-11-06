const express = require("express");
const router = express.Router();
//
const Reviews = require("../models/reviews.js");

//create
router.post("/", (req, res) => {
  Reviews.create(req.body, (error, createdReview) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

////send to review page
router.get("/", (req, res) => {
  res.render("reviews/new.ejs");
});

//
module.exports = router;
