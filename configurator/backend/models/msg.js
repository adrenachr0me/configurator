const mongoose = require("mongoose");
const mesSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
});

module.exports = mongoose.model("Message", mesSchema, "message");
