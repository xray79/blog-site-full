"use strict";
const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your full name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model("User", usersSchema);
