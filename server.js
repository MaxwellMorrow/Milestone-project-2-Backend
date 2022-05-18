// dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const Bug = require("./models/Bug")
const User = require("./models/User")


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


// models connections



// ROUTES

// show all index route
app.get("/bugs", async (req, res) => {
  try {
    const Bugs = await Bug.find();
    console.log(Bugs);
    res.send(Bugs);
  } catch (e) {
    console.log(e.message);
    res.send(e)
  }

});

// Update 
//localhost:3000/ticket/

// Delete route

http: app.listen(PORT, () => {
  console.log("Bugtracking at", PORT);
});

