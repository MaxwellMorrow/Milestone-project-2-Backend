// dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const Bug = require("./models/Bug")
// const User = require("./models/User")
const bugsController = require("./controllers/bugs_controller")
const usersController = require("./controllers/user_controller")
// PORT AND MONGOOSE CONNECTION
const PORT = process.env.PORT;
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

// middleware
app.use(cors()); // prevents cors error
app.use(express.json()); // allows server to parse Json
app.use(express.urlencoded({ extended: true }));

// ROUTES

app.use("/bugs",bugsController)

app.use("/users",usersController)

http: app.listen(PORT, () => {
  console.log("Bugtracking at", PORT);
});

