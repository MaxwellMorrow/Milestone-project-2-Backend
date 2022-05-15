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

// middleware
app.use(cors()); // prevents cors error
app.use(express.json()); // allows server to parse Json
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", (req, res) => {
  res.json("Back End Connected!");
});

app.listen(PORT, () => {
  console.log("Bugtracking at", PORT);
});
