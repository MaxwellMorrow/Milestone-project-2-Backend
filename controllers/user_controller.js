const express = require("express");
const router = express.Router();
const User = require("../models/User.js");


router.get("/", async (req, res) => {
  try {
    const Users = await User.find();
    console.log(Users);
    res.send(Users);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});

module.exports = router