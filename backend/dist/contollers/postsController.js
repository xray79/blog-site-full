"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncHandler = require("express-async-handler");
const Post = require("../models/postsModel");
const User = require("../models/usersModel");
// @desc    get all posts
// @route   GET api/posts
// @access  private
const getPosts = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post.find();
    res.status(200).json(post);
}));
// @desc    get user's posts
// @route   GET api/posts/getMy
// @access  private
const getMyPosts = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post.find({ user: req.user.id });
    res.status(200).json(post);
}));
// @desc    create new post
// @route   POST api/posts
// @access  private
const postPosts = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        res.status(400);
        throw new Error("Please add a text field");
    }
    const post = yield Post.create({
        user: req.user.id,
        title: req.body.title,
        body: req.body.body,
    });
    res.status(200).json(post);
}));
// @desc    edit a post made by the user
// @route   PUT api/posts/:id
// @access  private
const putPosts = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post.findById(req.params.id);
    if (!post) {
        res.status(400);
        throw new Error("no post found");
    }
    // check for user
    const user = yield User.findById(req.user.id);
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
    const updatedPost = yield Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        body: req.body.body,
    }, { new: true });
    // return updated post to client
    res.status(200).json(updatedPost);
}));
// @desc    Delete a post made by the user
// @route   DELETE api/posts/:id
// @access  Private
const deletePosts = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post.findById(req.params.id);
    if (!post) {
        res.status(400);
        throw new Error("no post found");
    }
    // Check for user
    const user = yield User.findById(req.user.id);
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
    yield Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `deleted ${req.params.id}` });
}));
module.exports = {
    getPosts,
    getMyPosts,
    postPosts,
    putPosts,
    deletePosts,
};
