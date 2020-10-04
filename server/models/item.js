const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: [{ type: String, required: true }],
  type: { type: String, required: true },
  weight: { type: String },
  detail: { type: String },
  roll: [{ type: String }],
  text: [{ type: String }],
  value: { type: String },
  magic: { type: String },
  ac: { type: String },
  modifier: {
    _category: { type: String },
    __text: { type: String },
  },
  dmg1: { type: String },
  dmg2: { type: String },
  dmgType: { type: String },
  date: { type: Date, default: Date.now },
  dmgType: { type: String },
  property: { type: String },
  range: { type: String },
  strength: { type: String },
  stealth: { type: String },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
