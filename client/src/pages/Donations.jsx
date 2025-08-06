

// src/pages/Donations.jsx
import React, { useState, useEffect } from 'react';
import { donateFood, getDonations } from '../api';
import '../styles.css';
import './Donations.css';

function Donations() {
  const [formData, setFormData] = useState({
    donorName: '',
    contactInfo: '',
    foodType: '',
    quantity: '',
    location: ''
  });

  const [donations, setDonations] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await donateFood(formData);
    setFormData({
      donorName: '',
      contactInfo: '',
      foodType: '',
      quantity: '',
      location: ''
    });
    fetchDonations();
  };

  const fetchDonations = async () => {
    const res = await getDonations();
    setDonations(res.data);
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div className="donations-container">
      <div className="donations-grid">
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
        </div>

        <div className="list-section card">
          <h3>📋 Donations List</h3>
          <ul className="donation-list">
            {donations.map((item, i) => (
              <li key={i} className="donation-item">
                <strong>{item.donorName}</strong> donated <strong>{item.quantity}</strong> of <strong>{item.foodType}</strong> at <em>{item.location}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Donations;

