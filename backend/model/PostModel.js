const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("Post", postSchema);
