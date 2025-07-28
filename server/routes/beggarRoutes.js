const express = require('express');
const router = express.Router();
const Beggar = require('../models/beggar');

// @route   POST /api/beggars
// @desc    Add a new beggar
router.post('/', async (req, res) => {
  console.log('Received POST /beggars with body:', req.body); // Debug log

  try {
    // Convert age to number just in case
    const data = {
      ...req.body,
      age: parseInt(req.body.age)
    };

    const beggar = new Beggar(data);
    await beggar.save();
    res.status(201).json(beggar);
  } catch (error) {
    console.error('Error saving beggar:', error.message); // Debug error
    res.status(400).json({ message: error.message });
  }
});

// @route   GET /api/beggars
// @desc    Get all beggars
router.get('/', async (req, res) => {
  try {
    const beggars = await Beggar.find();
    res.json(beggars);
  } catch (error) {
    console.error('Error fetching beggars:', error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
