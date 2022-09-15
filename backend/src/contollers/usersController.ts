export {};
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User: any = require("../models/usersModel");
// Required types accept only new syntax
import express = require("express");
// const { Request, Response } = express;
import { Request, Response } from "express";

// @desc    registers users
// @route   POST api/users/register
// @access  public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  // if no body
  if (!req.body) {
    res.status(400);
    throw new Error("Please enter some data");
  }

  // destructure items
  const { name, email, password } = req.body;

  // validate
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please enter all fields");
  }

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // register user
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user in db
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // verify if user was created and send back
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.status(200).json({ message: "get" });
});

// @desc    login users
// @route   POST api/users/login
// @access  public
const loginUser = asyncHandler(async (req: Request, res: Response) => {
  // destructure email password from req
  const { email, password } = req.body;

  // find user by email
  const user = await User.findOne({ email });

  // compare password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const putUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "put" });
});

const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "delete" });
});

const generateToken = (id: any) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser, loginUser, putUser, deleteUser };
