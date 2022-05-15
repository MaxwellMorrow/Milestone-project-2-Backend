// Import Mongoose
const mongoose = require("mongoose");

// Schema Constructor
const { Schema } = mongoose;

const userSchema = new Schema({
    user_id:{ type: Number, required: true },
    name: { type: String, required: true },
    assignedbugs: { type: String, required: true },
});

const User = mongoose.model("User",userSchema);

module.exports = User;