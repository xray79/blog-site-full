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
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");
// @desc    registers users
// @route   POST api/users/register
// @access  public
const registerUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const userExists = yield User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    // register user
    // hash password
    const salt = yield bcrypt.genSalt(10);
    const hashedPassword = yield bcrypt.hash(password, salt);
    // create user in db
    const user = yield User.create({
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
    }
    else {
        res.status(400);
        throw new Error("Invalid user data");
    }
    res.status(200).json({ message: "get" });
}));
// @desc    login users
// @route   POST api/users/login
// @access  public
const loginUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // destructure email password from req
    const { email, password } = req.body;
    // find user by email
    const user = yield User.findOne({ email });
    // compare password
    if (user && (yield bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
}));
const putUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "put" });
}));
const deleteUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "delete" });
}));
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
module.exports = { registerUser, loginUser, putUser, deleteUser };
