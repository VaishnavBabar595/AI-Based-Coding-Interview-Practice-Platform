const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  problemId: String,
  code: String,
  feedback: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Submission", submissionSchema);
