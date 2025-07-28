const mongoose = require('mongoose');

const beggarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    default: 'None',
  },
  needs: {
    type: String,
    default: '',
  },
}, { timestamps: true });

module.exports = mongoose.model('Beggar', beggarSchema);
