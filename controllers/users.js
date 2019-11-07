const express = require("express");
const router = express.Router();

//new
router.get("/new", (req, res) => {
  res.render("users/new.ejs");
});

module.exports = router;
