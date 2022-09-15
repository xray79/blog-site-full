export {};
const {
  getPosts,
  getMyPosts,
  postPosts,
  putPosts,
  deletePosts,
} = require("../contollers/postsController");
const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getPosts).post(protect, postPosts);
router.route("/getMy").get(protect, getMyPosts);
router.route("/:id").put(protect, putPosts).delete(protect, deletePosts);

module.exports = router;
