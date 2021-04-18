const express = require("express");
const app = express();
const postsRouter = require("./routers/posts-router");
const categoriesRouter = require("./routers/categories-router");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

mongoose.connect(process.env.CONNECT_TO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/posts", postsRouter);
app.use("/categories", categoriesRouter);



app.listen("3000", (error) => {
  if (error) {
    return console.log(
      "Error happened while starting the app on port 3000: ",
      error
    );
  }
  console.log("Application successfully started on port 3000");
});