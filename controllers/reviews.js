const express = require("express");
const router = express.Router();
//
const Reviews = require("../models/reviews.js");

////send to review page
router.get("/", (req, res) => {
  res.send("review page");
});

//
module.exports = router;
