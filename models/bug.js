// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;

const bugSchema = new Schema({
  name: { type: String, required: true },
  priority: { type: String, required: true },
  details: { type: String, required: true },
});


// Exports


// Model
const Bug = mongoose.model("Bug", bugSchema);

module.exports = Bug;