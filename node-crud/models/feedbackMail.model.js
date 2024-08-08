//
// Creating mongoose model for feedbackMail from a website :)
// -Dev in prog.., -Not yet tested !!

const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your Full Name'],
    },

    // Adding email of the person giving feedback
    email: {
      type: Email,
      required: [true, 'Please enter your Email'],
    },

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

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
