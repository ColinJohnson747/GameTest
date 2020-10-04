const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  weight: String,
  text: String,
  date: { type: Date, default: Date.now },
});

const Item = mongoose.model("Book", bookSchema);

module.exports = Item;
