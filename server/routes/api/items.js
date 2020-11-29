const router = require("express").Router();
const { route } = require(".");
const itemController = require("../../controllers/itemController");

router.route("/").get(itemController.findAll).post(itemController.create);

router.route("/viaSearch/:search").get(itemController.findViaSearch);

module.exports = router;
