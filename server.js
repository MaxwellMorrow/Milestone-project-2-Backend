// dependencies
require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

// models connections
const User = require("./models/User")
const Bug = require("./models/Bug")

// middleware
app.use(cors()); // prevents cors error
app.use(express.json()); // allows server to parse Json
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", async (req, res) => {
   try {
     const Bugs = await Bug.find();
     console.log(Bugs);
     res.json(Bugs);
   } catch (e) {
     console.log(e.message);
     res.send(e)
   }
});

app.listen(PORT, () => {
  console.log("Bugtracking at", PORT);
});
