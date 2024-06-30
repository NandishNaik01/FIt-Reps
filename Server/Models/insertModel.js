const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  workout: String,
  sets: Number,
});
const WorkoutModel = mongoose.model("Fitreps", WorkoutSchema);

module.exports = WorkoutModel;
