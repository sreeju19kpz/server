const express = require("express");

const router = express.Router();
const {
  getAllPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/tasks");

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getSinglePost).post(updatePost).delete(deletePost);

module.exports = router;
