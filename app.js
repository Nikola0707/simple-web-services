const express = require("express");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");

app.use(express.json());
app.use("/", router);

require("dotenv").config();

mongoose.connect(process.env.CONNECT_TO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, console.log("This app is listening on port 3000"))