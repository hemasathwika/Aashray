// src/pages/DonationsList.jsx
import React, { useEffect, useState } from 'react';
import { getDonations } from '../api';
import '../styles.css';
import './Donations.css';

function DonationsList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const res = await getDonations();
      setDonations(res.data);
    };

    fetchDonations();
  }, []);

  return (
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
  );
}

export default DonationsList;
