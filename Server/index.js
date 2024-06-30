const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = 3001;

app.listen(port, () => {
  console.log("server is running on 3001");
});
