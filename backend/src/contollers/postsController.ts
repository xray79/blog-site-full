export {};
const asyncHandler = require("express-async-handler");
const Post = require("../models/postsModel");
const User = require("../models/usersModel");

// Required types accept only new syntax
import { Request, Response } from "express";

// type for req.user
type RequestUser = Request & { user: any };

// @desc    get all posts
// @route   GET api/posts
// @access  private
const getPosts = asyncHandler(async (req: Request, res: Response) => {
  const post = await Post.find();
  res.status(200).json(post);
});

// @desc    get user's posts
// @route   GET api/posts/getMy
// @access  private
const getMyPosts = asyncHandler(async (req: RequestUser, res: Response) => {
  const post = await Post.find({ user: req.user.id });
  res.status(200).json(post);
});

// @desc    create new post
// @route   POST api/posts
// @access  private
const postPosts = asyncHandler(async (req: RequestUser, res: Response) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const post = await Post.create({
    user: req.user.id,
    title: req.body.title,
    body: req.body.body,
  });
  res.status(200).json(post);
});

// @desc    edit a post made by the user
// @route   PUT api/posts/:id
// @access  private
const putPosts = asyncHandler(async (req: RequestUser, res: Response) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("no post found");
  }

  // check for user
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // make sure logged in user matches post user
  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorised to make changes");
  }

  // update post
  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      body: req.body.body,
    },
    { new: true }
  );

  // return updated post to client
  res.status(200).json(updatedPost);
});

// @desc    Delete a post made by the user
// @route   DELETE api/posts/:id
// @access  Private
const deletePosts = asyncHandler(async (req: RequestUser, res: Response) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("no post found");
  }

  // Check for user
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Make sure logged in user matches post user
  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorised to make changes");
  }

  // Delete post
  await Post.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: `deleted ${req.params.id}` });
});

module.exports = {
  getPosts,
  getMyPosts,
  postPosts,
  putPosts,
  deletePosts,
};
