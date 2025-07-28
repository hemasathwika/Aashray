// src/pages/Shelters.jsx
import React, { useState, useEffect } from 'react';
import { addShelter, getShelters } from '../api';
import '../styles.css';

function Shelters() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactInfo: '',
    capacity: '',
    currentOccupancy: ''
  });

  const [shelters, setShelters] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addShelter(formData);
      setFormData({
        name: '',
        address: '',
        contactInfo: '',
        capacity: '',
        currentOccupancy: ''
      });
      fetchShelters();
    } catch (err) {
      console.error("Shelter submission error:", err);
    }
  };

  const fetchShelters = async () => {
    try {
      const res = await getShelters();
      setShelters(res.data);
    } catch (err) {
      console.error("Error fetching shelters:", err);
    }
  };

  useEffect(() => {
    fetchShelters();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4">🏠 Add Shelter</h2>

      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Shelter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="contactInfo"
            placeholder="Contact Info"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            name="capacity"
            placeholder="Capacity"
            value={formData.capacity}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            name="currentOccupancy"
            placeholder="Current Occupancy"
            value={formData.currentOccupancy}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Add Shelter
        </button>
      </form>

      <h3 className="mb-3">📋 Shelter List</h3>
      <ul className="list-group">
        {shelters.length === 0 ? (
          <li className="list-group-item">No shelters added yet.</li>
        ) : (
          shelters.map((shelter, i) => (
            <li key={i} className="list-group-item">
              <strong>{shelter.name}</strong> — {shelter.address}<br />
              📞 {shelter.contactInfo}<br />
              🛏️ Capacity: {shelter.capacity}, Occupied: {shelter.currentOccupancy}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Shelters;
