const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Item.find()
      .then((items) => {
        res.json(items);
      })
      .catch((err) => res.status(422).json(err));
  },
};
