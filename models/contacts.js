const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: Number,
  email: { type: String, required: true },
  message: { type: String, required: true }
});

const Contacts = mongoose.model("contacts", contactsSchema);

module.exports = Contacts;
