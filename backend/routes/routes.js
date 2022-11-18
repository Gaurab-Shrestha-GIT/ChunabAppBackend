const express = require("express");
const { registerUser, savePost } = require("../controller/controller");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/post").post(savePost);

module.exports = router;
