const mongoose = require("mongoose");

const Project = new mongoose.Schema({
  Project_Name: { type: String, require: true },
  Start_Date: { type: Date, require: true },
  Submission_Date: { type: Date, required: true },
  Project_Discription: { type: String, required: true },
  Workers: [{ type: String }]
});

module.exports = mongoose.model("Project", Project);
