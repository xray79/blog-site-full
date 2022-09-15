export {};
const express = require("express");
const {
  registerUser,
  loginUser,
  putUser,
  deleteUser,
} = require("../contollers/usersController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id").put(putUser).delete(deleteUser);

module.exports = router;
