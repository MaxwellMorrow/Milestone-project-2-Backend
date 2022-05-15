const express = require("express");
const user = express.Router();
const Bug = require("../models/bug.js");
const User = require("../models/user.js");

user.get("/", (req, res) => {});
