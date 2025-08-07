// src/pages/Donations.jsx
import React, { useState } from 'react';
import { donateFood } from '../api';
import '../styles.css';
import './Donations.css';
import { useNavigate } from 'react-router-dom';

function Donations() {
  const [formData, setFormData] = useState({
    donorName: '',
    contactInfo: '',
    foodType: '',
    quantity: '',
    location: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await donateFood(formData);
    alert("Donation successful!");
    setFormData({
      donorName: '',
      contactInfo: '',
      foodType: '',
      quantity: '',
      location: ''
    });
  };

  return (
    <div className="donations-container">
      <div className="form-section card">
        <h2>🍱 Donate Food</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="donorName" placeholder="Donor Name" value={formData.donorName} onChange={handleChange} required />
          <input type="text" name="contactInfo" placeholder="Contact Info" value={formData.contactInfo} onChange={handleChange} required />
          <input type="text" name="foodType" placeholder="Food Type" value={formData.foodType} onChange={handleChange} required />
          <input type="text" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
          <button type="submit">Donate</button>
        </form>

        <button
          className="view-list-btn"
          onClick={() => navigate('/donations/list')}
        >
          📋 View Donations List
        </button>
      </div>
    </div>
  );
}

export default Donations;
