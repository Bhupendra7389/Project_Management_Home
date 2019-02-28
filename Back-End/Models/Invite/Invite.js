const mongoose = require("mongoose");
const Invite = new mongoose.Schema({
  ProjectId: { type: String, require: true },
  DeveloperId: { type: String, required: true }
});

module.exports = mongoose.model("Invite", Invite);
