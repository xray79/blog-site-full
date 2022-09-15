// empty export for module scope to avoid ts scope errors
export {};

const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { urlencoded } = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const { localhostHandler } = require("./middleware/corsMiddleware");
const postsRouter = require("./routes/postsRoutes");
const usersRouter = require("./routes/usersRoutes");
const connectDB = require("./db/db");
const path = require("path");

const PORT = process.env.PORT || 4000;

connectDB();

const app = express();

// allow json data
app.use(express.json());
// allow encoded but not nested data
app.use(urlencoded({ extended: false }));

// middleware to allow api reqs from localhost
app.use(localhostHandler());

app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

// production
if ((process.env.NODE_ENV = "production")) {
  app.use(express.static(path.join(__dirname, "../../frontend/build/")));

  app.get("*", (req: any, res: any) =>
    res.sendFile(
      path.resolve(__dirname, "../", "../", "frontend", "build", "index.html")
    )
  );
}

// error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    colors.blue.italic(`Server started on port http://localhost:${PORT}/api`)
  );
});
