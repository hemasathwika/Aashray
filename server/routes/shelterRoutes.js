// server/routes/shelterRoutes.js
const express = require('express');
const router = express.Router();
const Shelter = require('../models/shelter');

// POST /api/shelters
// POST /api/shelters
router.post('/', async (req, res) => {
  try {
    console.log("Incoming shelter data:", req.body);  // 👈 Add this line
    const shelter = new Shelter(req.body);
    await shelter.save();
    res.status(201).json(shelter);
  } catch (error) {
    console.error(error); // 👈 log full error
    res.status(400).json({ message: error.message });
  }
});


// GET /api/shelters
router.get('/', async (req, res) => {
  try {
    const shelters = await Shelter.find();
    res.json(shelters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
