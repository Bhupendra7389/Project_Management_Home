const mongoose = require("mongoose");

const Task = new mongoose.Schema({
  Task_Name: { type: String, require: true },
  Start_Date: { type: Date, require: true },
  Submission_Date: { type: Date, required: true },
  Total_Developers: { type: String, required: true },
  Task_Discription: { type: String, required: true },
  Project_Id: "",
  Task_Comment: [{ type: String }]
});

module.exports = mongoose.model("Task", Task);
