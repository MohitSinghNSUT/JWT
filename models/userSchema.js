const mongoose = require("mongoose");
const person = {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
};
const personSchema = new mongoose.Schema(person, { timestamps: true });
const personModel = mongoose.Model("user", personSchema);
module.exports = personModel;
