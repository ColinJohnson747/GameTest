const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route("/").get(itemController.findAll).post(itemController.create);

module.exports = router;
