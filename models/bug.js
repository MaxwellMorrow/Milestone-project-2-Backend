// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;

const bugSchema = new Schema({
  name: { type: String, required: true, enum: ["Low", "Medium", "High"] },
  priority: { type: String, required: true },
  details: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectID,
    ref: "User",
  },
});



// Model
const Bug = mongoose.model("Bug", bugSchema);

module.exports = Bug;