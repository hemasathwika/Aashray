const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  donorName: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  isPickedUp: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Food', foodSchema);
