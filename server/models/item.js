const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: [{ type: String, required: true }],
  type: { type: String, required: true },
  weight: String,
  detail: String,
  roll: String,
  text: [{ type: String }],
  value: String,
  date: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
