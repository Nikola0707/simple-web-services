const express = require("express");
const app = express();
const postsRouter = require("./routers/posts-router");
const categoriesRouter = require("./routers/categories-router");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/posts", postsRouter);
app.use("/categories", categoriesRouter);

require("dotenv").config();

mongoose.connect(process.env.CONNECT_TO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, console.log("This app is listening on port 3000"))