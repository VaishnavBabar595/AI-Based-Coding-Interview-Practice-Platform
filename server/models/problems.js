const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String
});

module.exports = mongoose.model("Problem", problemSchema);
