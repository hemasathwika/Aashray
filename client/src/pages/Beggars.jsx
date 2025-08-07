import React, { useState } from 'react';
import { addBeggar } from '../api';
import { Link } from 'react-router-dom';

function Beggars() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    identification: '',
    needs: '',
  });

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
  };

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

      {/* Link to Beggar List Page */}
      <div className="text-center">
        <Link to="/beggar-list" className="btn btn-outline-primary">View Beggar List</Link>
      </div>
    </div>
  );
}

export default Beggars;
