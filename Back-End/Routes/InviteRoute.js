var express = require("express");
var router = express.Router();
var Invite = require("../Models/Invite/Invite");
router.post("/Invite/Developer", async (req, res) => {
  try {
    const { ProjectId, DeveloperId } = req.body;
    //console.log(Project.find({ _id: ProjectId }));
    if (ProjectId && DeveloperId) {
      let invite = new Invite({
        ProjectId,
        DeveloperId
      });
      invite.save();
      res.json(invite);
    } else {
      null;
    }
  } catch {
    console.error(500);
  }
});
router.post("/Delete/DeleteDeveloperInvite", async (req, res) => {
  try {
    let user = await Invite.findOneAndDelete({
      ProjectId: req.body.ProjectId,
      DeveloperId: req.body.DeveloperId
    });
    res.json(user);
  } catch {
    console.error("Internal Error");
  }
});
router.get("/Get/InvitedByProject/:DeveloperId", async (req, res) => {
  const project = await Invite.find({
    DeveloperId: req.params.DeveloperId
  });
  res.json(project);
});
module.exports = router;
