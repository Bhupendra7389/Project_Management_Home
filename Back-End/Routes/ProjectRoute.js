var express = require("express");
var router = express.Router();
var Project = require("../Models/Projects/Project");
require("mongoose");

router.get("/Get/ProjectList", async (req, res) => {
  try {
    const ProjectList = await Project.find({});

    res.json(ProjectList);
  } catch (error) {
    res.status(500);
  }
});
router.post("/Add/Project", async (req, res) => {
  try {
    const {
      Project_Name,
      Start_Date,
      Submission_Date,
      Project_Discription
    } = await req.body;
    const project = new Project({
      Project_Name,
      Start_Date,
      Submission_Date,
      Project_Discription
    });
    project.save((error, user) => {
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
router.put("/Invite/InviteResponse/:ProjectId", async (req, res) => {
  try {
    await Project.findOneAndUpdate(
      { _id: req.params.ProjectId },
      { $push: { Workers: req.body.DeveloperEmail } }
    );
    res.send("Done");
  } catch {
    console.log("Error");
  }
});
router.get("/Invite/InvitesById/:ProjectId", async (req, res) => {
  try {
    let project = await Project.find({ _id: req.params.ProjectId });
    console.log(project);
    res.json(project);
  } catch (error) {
    res.status(error);
  }
});
module.exports = router;
