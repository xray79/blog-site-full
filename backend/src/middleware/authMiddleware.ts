const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");

// importing express types accepts only new import syntax
import { Request, Response, NextFunction } from "express";

type RequestUser = Request & { user: any };

const protect = asyncHandler(
  async (req: RequestUser, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");
        console.log(req.user);

        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not Authorized, invalid token");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

module.exports = { protect };
