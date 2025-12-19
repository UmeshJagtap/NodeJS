//
// Creating mongoose model for feedbackMail from a website :)
// -Dev in prog... ,

const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema(
  {
    // Adding persons mail
    name: {
      type: String,
      required: [true, 'Please enter your Full Name'],
    },

    // Adding email of the person giving feedback
    email: {
      type: String,
      required: [true, 'Please enter your Email'],
    },

    // Adding feedback
    feedback: {
      type: String,
      required: [true, 'Please share your Feedback here'],
    },

    quantity: {
      type: Number,
      required: false,
      default: 0,
    },

    price: {
      type: Number,
      required: false,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true,
  }
);

const FeedbackMail = mongoose.model('FeedbackMail', FeedbackSchema);

module.exports = FeedbackMail;
