const mongoose = require('mongoose');
const feedbackSchema= mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true, // Assuming email addresses should be unique
      },
      message: {
        type: String,
        required: true,
      },
});

module.exports= mongoose.model("feedback",feedbackSchema);