require("mongoose");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = new express();
const ProjectRoute = require("./Routes/ProjectRoute");
const InviteRouter = require("./Routes/InviteRoute");
const UserRouter = require("./Routes/UserRoute");
const TaskRouter = require("./Routes/TaskRoute");
const webpush = require("web-push");
require("dotenv").config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
webpush.setVapidDetails(
  "mailto:Bhupendrasahu7389@gmail.com",
  publicVapidKey,
  privateVapidKey
);

app.use(bodyParser.json()).use(morgan());
var cors = require("cors");
require("./Models/Mongo");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello Friends");
});
app.use("/", ProjectRoute);
app.use("/", InviteRouter);
app.use("/", UserRouter);
app.use("/", TaskRouter);

//Server Run
app.listen(8081, () => {
  console.log("Server is Running on Port http://localhost:8081");
});
