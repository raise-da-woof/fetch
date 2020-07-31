const db = require("../models");

// Defining methods for the messagesController
module.exports = {
  findAllByThread: async function({ params, body }, res) {
    try {
      const messages = await db.Swipe.find({ $or: [{ sender: params.id }, { receiver: params.id }, { sender: body.threadId }, {receiver: body.threadId }] }).sort({ dateSent: -1 })
      if (!messages) {
        return res.status(400).json("No messages found!");
      }
      return res.json(messages)
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  findById: function(req, res) {
    db.Message
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Message
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
