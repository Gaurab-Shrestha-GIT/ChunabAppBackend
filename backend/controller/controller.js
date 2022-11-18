const User = require("../model/UserModel");
const { db } = require("../database/db");
const Post = require("../model/PostModel");

const registerUser = async (req, res) => {
  const data = new User(req.body);
  data.save((error, saveData) => {
    if (error) {
      console.log(error);
    } else {
      return res.json({
        register: true,
        result: saveData,
      });
    }
  });
};

const savePost = async (req, res) => {
  const data = new Post(req.body);
  data.save((error, saveData) => {
    if (error) {
      console.log(error);
    } else {
      console.log(saveData);
    }
  });
};

module.exports = {
  registerUser,
  savePost,
};
