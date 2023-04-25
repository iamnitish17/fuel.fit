const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // min: 3,
    // max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // max: 50,
  },
  
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  
   plan: {
    type: String,
    required: true,
    max: 50,
  },
   message: {
    type: String,
    required: true,
    max: 200,
  },  
 
});

module.exports = mongoose.model("Users", userSchema);