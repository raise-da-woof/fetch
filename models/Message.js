const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet",
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet",
  },
  dateSent: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  unread: {
    type: Boolean,
    default: true
  }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
