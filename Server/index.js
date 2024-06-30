const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://127.0.0.1:27017/Fitreps");
// import WorkoutModel from "./Models/insertModel.js";
const WorkoutModel = require("./Models/insertModel");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  const workout = req.body.workout;
  const sets = req.body.sets;
  WorkoutModel.create({
    workout: workout,
    sets: sets,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  WorkoutModel.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

const port = 3001;

app.listen(port, () => {
  console.log("server is running on 3001");
});
