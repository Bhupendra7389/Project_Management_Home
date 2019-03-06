var express = require("express");
var router = express.Router();
var Notifications = require("../Models/Notifications/Notifications");
router.post("/Add/Notifications", async (req, res) => {
  try {
    let user = await Notifications.findOneAndDelete({
      Notifications: req.body.Notification
    });
    res.json(user);
  } catch {
    console.error("Internal Error");
  }
});
