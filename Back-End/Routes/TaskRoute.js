var express = require("express");
var router = express.Router();
const Task = require("../Models/Projects/Task");
router.put("/Add/Comment/:TaskId", async (req, res) => {
  try {
    let comment = await Task.findOneAndUpdate(
      { _id: req.params.TaskId },
      { $push: { Task_Comment: req.body.Comment } }
    );
    res.json(comment);
  } catch {
    console.log("Error");
  }
});

router.post("/Add/Task", async (req, res) => {
  try {
    const {
      Task_Name,
      Start_Date,
      Submission_Date,
      Total_Developers,
      Task_Discription,
      Project_Id
    } = await req.body;
    const task = new Task({
      Task_Name,
      Start_Date,
      Submission_Date,
      Total_Developers,
      Task_Discription,
      Project_Id
    });
    task.save((error, user) => {
      if (error) {
        res.send(error);
      } else if (!user) {
        res.send("Data not found");
      } else {
        res.status(200).send(user);
      }
    });
  } catch (error) {
    console.error(500);
  }
});

router.get("/Get/TaskList/:Project_Id", async (req, res) => {
  try {
    const TaskList = await Task.find({ Project_Id: req.params.Project_Id });

    res.json(TaskList);
  } catch (error) {
    res.status(500);
  }
});

router.get("/Edit/GetTaskById/:TaskId", async (req, res) => {
  try {
    const task = await Task.find({ _id: req.params.TaskId });

    res.json(task);
  } catch (error) {
    res.status(500);
  }
});
router.patch("/Edit/EditTask/:TaskId", async (req, res) => {
  try {
    const {
      Task_Name,
      Start_Date,
      Submission_Date,
      Total_Developers,
      Task_Discription
    } = await req.body;
    let user = await Task.findByIdAndUpdate(
      {
        _id: req.params.TaskId
      },
      {
        Task_Name,
        Start_Date,
        Submission_Date,
        Total_Developers,
        Task_Discription
      }
    );

    res.json(user);
  } catch (error) {
    res.status(500);
  }
});
router.delete("/Delete/DeleteTask/:Id", async (req, res) => {
  try {
    let task = await Task.findByIdAndDelete({ _id: req.params.Id });
    res.json(task);
  } catch (error) {}
});
router.put("/Update/TaskStatus/:TaskId", async (req, res) => {
  try {
    let taskStatus = await Task.findByIdAndUpdate(
      { _id: req.params.TaskId },
      { Task_Status: req.body.TaskStatus }
    );
    res.send(taskStatus);
  } catch {
    console.log("Error");
  }
});
module.exports = router;
