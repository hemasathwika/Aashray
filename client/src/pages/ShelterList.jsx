// src/pages/ShelterList.jsx
import React, { useEffect, useState } from 'react';
import { getShelters } from '../api';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import '../styles.css';
import './Shelters.css';

function ShelterList() {
  const [shelters, setShelters] = useState([]);

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
    <Layout>
      <div className="shelters-container pt-5 mt-5 pl-5 pr-4">
        <div className="list-section shadow-4 p-4 rounded mb-5 mt-5">
          <h3 className="mb-3 text-center">📋 Shelter List</h3>
          {shelters.length === 0 ? (
            <p className="text-center text-muted">No shelters added yet.</p>
          ) : (
            <div className="row">
              {shelters.map((shelter, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">{shelter.name}</h5>
                      <p className="card-text">
                        📍 {shelter.address}<br />
                        📞 {shelter.contactInfo}<br />
                        🛏️ Capacity: {shelter.capacity} | Occupied: {shelter.currentOccupancy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 👇 Back link */}
          <div className="text-center mt-4">
            <Link to="/shelters" className="btn btn-link">🔙 Back to Add Shelter</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ShelterList;
