// src/pages/AddShelter.jsx
import React, { useState } from 'react';
import { addShelter } from '../api';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import '../styles.css';
import './Shelters.css';

function AddShelter() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactInfo: '',
    capacity: '',
    currentOccupancy: ''
  });

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
      alert("Shelter added successfully!");
    } catch (err) {
      console.error("Shelter submission error:", err);
    }
  };

  return (
    <Layout>
      <div className="shelters-container pt-5 mt-5 pl-5 pr-4">
        <div className="form-section shadow-4 p-4 rounded mb-5 mt-5">
          <h2 className="mb-4 text-center">🏠 Add a Shelter</h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input className="form-control" type="text" name="name" placeholder="Shelter Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input className="form-control" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <input className="form-control" type="text" name="contactInfo" placeholder="Contact Info" value={formData.contactInfo} onChange={handleChange} required />
              </div>
              <div className="col-md-3">
                <input className="form-control" type="number" name="capacity" placeholder="Capacity" value={formData.capacity} onChange={handleChange} required min="0" />
              </div>
              <div className="col-md-3">
                <input className="form-control" type="number" name="currentOccupancy" placeholder="Current Occupancy" value={formData.currentOccupancy} onChange={handleChange} required min="0" />
              </div>
            </div>
            <button type="submit" className="btn btn-success w-100 mt-4">Add Shelter</button>
          </form>

          {/* 👇 Link to shelter list page */}
          <div className="text-center mt-4">
            <Link to="/shelter-list" className="btn btn-link">📋 Click here to view all shelters</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddShelter;



