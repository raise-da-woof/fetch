const router = require("express").Router();
const messagesController = require("../../controllers/messagesController");

// Matches with "/api/messages"
router.route("/")
  .post(messagesController.create);

// Matches with "/api/messages/:id"
router.route("/:id")
  .post(messagesController.findAllByThread)

module.exports = router;