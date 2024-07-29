const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({
  enrollmentNo: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student Detail", studentDetails);
