"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    body: {
        type: String,
        required: [true, "Please enter a post"],
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model("Post", postsSchema);
