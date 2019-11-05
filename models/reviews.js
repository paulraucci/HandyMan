const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: { type: String, required: true },
  jobtype: { type: String },
  comment: { type: String, required: true }
});

const Reviews = mongoose.model("reviews", reviewSchema);
module.exports = Reviews;
