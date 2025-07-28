// client/src/pages/Beggars.jsx
import React, { useState, useEffect } from 'react';
import { addBeggar, getBeggars } from '../api';

function Beggars() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    identification: '',
    needs: '',
  });

  const [beggars, setBeggars] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBeggar(formData);
    setFormData({
      name: '',
      age: '',
      gender: '',
      identification: '',
      needs: '',
    });
    fetchBeggars();
  };

  const fetchBeggars = async () => {
    const res = await getBeggars();
    setBeggars(res.data);
  };

  useEffect(() => {
    fetchBeggars();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4">🧑‍🦯 Add Beggar</h2>

      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <input className="form-control" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input className="form-control" type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <select className="form-control" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" name="identification" placeholder="Aadhaar / PAN / None" value={formData.identification} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" name="needs" placeholder="Needs / Medical / Counseling" value={formData.needs} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">Add Beggar</button>
      </form>

      <h3 className="mb-3">📋 Beggar List</h3>
      <ul className="list-group">
        {beggars.map((b, index) => (
          <li key={index} className="list-group-item">
            <strong>{b.name}</strong> — {b.age} years, {b.gender} | ID: {b.identification || 'N/A'} | Needs: {b.needs}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Beggars;
