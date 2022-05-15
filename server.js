
// dependencies
require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());// prevents cors error
app.use(express.json());// allows server to parse Json

