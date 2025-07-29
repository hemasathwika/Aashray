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
    <div className="donations-page">
      <div className="form-section">
        <h2 className="mb-4 text-center">🍱 Donate Food</h2>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <input className="form-control" type="text" name="donorName" placeholder="Donor Name" value={formData.donorName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input className="form-control" type="text" name="contactInfo" placeholder="Contact Info" value={formData.contactInfo} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input className="form-control" type="text" name="foodType" placeholder="Food Type" value={formData.foodType} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input className="form-control" type="text" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input className="form-control" type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Donate</button>
        </form>
      </div>

      <div className="list-section">
        <h3 className="mb-3 text-center">📋 Donations List</h3>
        <ul className="list-group">
          {donations.map((item, i) => (
            <li key={i} className="list-group-item">
              <strong>{item.donorName}</strong> donated <strong>{item.quantity}</strong> of <strong>{item.foodType}</strong> at <em>{item.location}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Donations;
