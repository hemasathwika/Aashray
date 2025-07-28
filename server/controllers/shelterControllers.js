// server/controllers/shelterController.js
const Shelter = require('../models/shelter');

// Create new shelter
exports.createShelter = async (req, res) => {
  try {
    const shelter = new Shelter(req.body);
    await shelter.save();
    res.status(201).json(shelter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all shelters
exports.getShelters = async (req, res) => {
  try {
    const shelters = await Shelter.find();
    res.status(200).json(shelters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single shelter
exports.getShelterById = async (req, res) => {
  try {
    const shelter = await Shelter.findById(req.params.id);
    if (!shelter) return res.status(404).json({ message: 'Shelter not found' });
    res.json(shelter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update shelter
exports.updateShelter = async (req, res) => {
  try {
    const shelter = await Shelter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(shelter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete shelter
exports.deleteShelter = async (req, res) => {
  try {
    await Shelter.findByIdAndDelete(req.params.id);
    res.json({ message: 'Shelter deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
