let mongoose = require("mongoose");
let db = require("../models");
let itemSeed = require("./seedData/itemSeed.json");

mongoose.connect("mongodb://localhost/GameTest", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

db.Item.deleteMany({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then((data) => {
    console.log(data.result.n + "records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
