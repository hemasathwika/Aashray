

import React, { useState } from 'react';
import { donateFood } from '../api';
import { useNavigate } from 'react-router-dom';
import './Donations.css';

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
    alert("🎉 Thank you for your donation!");
    setFormData({
      donorName: '',
      contactInfo: '',
      foodType: '',
      quantity: '',
      location: ''
    });
  };

  return (
    <div className="donation-wrapper mt-5">
      {/* Hero Section */}
      <section className="donation-hero mt-5">
        <h1>🌍 Be the Reason Someone Smiles Today</h1>
        <p>Every plate of food you donate brings hope, dignity, and warmth to someone in need. Let’s create a beggar-free, hunger-free world together.</p>
      </section>

      {/* Motivation Section */}
      <section className="donation-motivation">
        <div className="motivation-card">
          <h2>🥘 Why Donate Food?</h2>
          <ul>
            <li>✨ Feed the hungry and reduce food waste</li>
            <li>❤️ Spread kindness and humanity</li>
            <li>🚶‍♂️ Support beggars in rebuilding their lives</li>
            <li>🙌 Inspire others to give back to society</li>
          </ul>
        </div>

        <div className="motivation-image">
          <img src="/images/donations.jpg" alt="Motivation" />
        </div>
      </section>

      {/* Donation Form */}
      <section className="donation-card">
        <h2>📝 Donate Your Leftover Food</h2>
        <form onSubmit={handleSubmit} className="donation-form">
          <div className="form-group">
            <label>👤 Donor Name</label>
            <input type="text" name="donorName" value={formData.donorName} onChange={handleChange} placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>📞 Contact Info</label>
            <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} placeholder="Phone or Email" required />
          </div>
          <div className="form-group">
            <label>🍲 Type of Food</label>
            <input type="text" name="foodType" value={formData.foodType} onChange={handleChange} placeholder="E.g., Rice, Bread, Curries" required />
          </div>
          <div className="form-group">
            <label>📦 Quantity</label>
            <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Approx. Quantity (e.g., 5 packs)" required />
          </div>
          <div className="form-group">
            <label>📍 Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter pickup address" required />
          </div>
          <button type="submit" className="btn-submit">✅ Donate Food</button>
          <button type="button" className="btn-view" onClick={() => navigate('/donations/list')}>
            📋 View All Donations
          </button>
        </form>
      </section>
    </div>
  );
}

export default Donations;
