// // src/pages/Shelters.jsx
// import React, { useState, useEffect } from 'react';
// import { addShelter, getShelters } from '../api';
// import '../styles.css';
// import './Shelters.css'; // custom styling file

// function Shelters() {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     contactInfo: '',
//     capacity: '',
//     currentOccupancy: ''
//   });

//   const [shelters, setShelters] = useState([]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addShelter(formData);
//       setFormData({
//         name: '',
//         address: '',
//         contactInfo: '',
//         capacity: '',
//         currentOccupancy: ''
//       });
//       fetchShelters();
//     } catch (err) {
//       console.error("Shelter submission error:", err);
//     }
//   };

//   const fetchShelters = async () => {
//     try {
//       const res = await getShelters();
//       setShelters(res.data);
//     } catch (err) {
//       console.error("Error fetching shelters:", err);
//     }
//   };

//   useEffect(() => {
//     fetchShelters();
//   }, []);

//   return (
//     <div className="shelters-container pt-5 mt-5 pl-5">
//       <div className="form-section shadow p-4 rounded mb-5">
//         <h2 className="mb-4 text-center">🏠 Add a Shelter</h2>

//         <form onSubmit={handleSubmit}>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <input className="form-control" type="text" name="name" placeholder="Shelter Name" value={formData.name} onChange={handleChange} required />
//             </div>
//             <div className="col-md-6">
//               <input className="form-control" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
//             </div>
//             <div className="col-md-6">
//               <input className="form-control" type="text" name="contactInfo" placeholder="Contact Info" value={formData.contactInfo} onChange={handleChange} required />
//             </div>
//             <div className="col-md-3">
//               <input className="form-control" type="number" name="capacity" placeholder="Capacity" value={formData.capacity} onChange={handleChange} required min="0" />
//             </div>
//             <div className="col-md-3">
//               <input className="form-control" type="number" name="currentOccupancy" placeholder="Current Occupancy" value={formData.currentOccupancy} onChange={handleChange} required min="0" />
//             </div>
//           </div>
//           <button type="submit" className="btn btn-success w-100 mt-4">Add Shelter</button>
//         </form>
//       </div>

//       <div className="list-section">
//         <h3 className="mb-3 text-center">📋 Shelter List</h3>
//         {shelters.length === 0 ? (
//           <p className="text-center text-muted">No shelters added yet.</p>
//         ) : (
//           <div className="row">
//             {shelters.map((shelter, i) => (
//               <div key={i} className="col-md-6 mb-4">
//                 <div className="card shadow-sm h-100">
//                   <div className="card-body">
//                     <h5 className="card-title">{shelter.name}</h5>
//                     <p className="card-text">
//                       📍 {shelter.address}<br />
//                       📞 {shelter.contactInfo}<br />
//                       🛏️ Capacity: {shelter.capacity} | Occupied: {shelter.currentOccupancy}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Shelters;




// src/pages/Shelters.jsx
import React, { useState, useEffect } from 'react';
import { addShelter, getShelters } from '../api';
import Layout from '../Layout';
import '../styles.css';
import './Shelters.css'; // custom styling file

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
        </div>

        <div className="list-section">
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
        </div>
      </div>
    </Layout>
  );
}

export default Shelters;
