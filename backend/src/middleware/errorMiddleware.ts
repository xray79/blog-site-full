export {};
import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // order of params must be (err, req, res, next) for express to recognise err middleware

  // error handler middleware overrides express defeault error handler
  // returns json error

  // if status code exists, return status code
  // else set to internal server error (500)
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  // return error message as json
  // stack returns location/details of error
  // set to undefined in production so stack is omitted entirely
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = { errorHandler };
