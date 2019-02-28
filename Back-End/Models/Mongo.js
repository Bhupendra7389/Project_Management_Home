const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/Project_Management";
mongoose.connect(URI, { useNewUrlParser: true });
