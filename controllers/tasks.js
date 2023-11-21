const Task = require("../models/task");
const { post } = require("../routes/tasks");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Task.find({});
    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const createPost = async (req, res) => {
  try {
    const post = await Task.create(req.body);
    res.status(201).json({ post });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
/* try {
} catch (err) {} */
const getSinglePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const post = await Task.findOne({ _id: postId });

    if (!post) {
      return res.status(404).json({ msg: `no posts with id ${postId}` });
    }
    res.status(200).json({ post });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updatePost = (req, res) => {
  res.send("update data");
};

const deletePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const post = await Task.findOneAndDelete({ _id: postId });
    if (!posts) {
      return res.status(404).json({ msg: `no posts with id ${postId}` });
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
};
