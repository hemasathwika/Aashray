import React, { useEffect, useState } from 'react';
import { getBeggars } from '../api';

function BeggarList() {
  const [beggars, setBeggars] = useState([]);

  const fetchBeggars = async () => {
    const res = await getBeggars();
    setBeggars(res.data);
  };

  useEffect(() => {
    fetchBeggars();
  }, []);

  return (
    <div className="container p-5 m-5">
      <h2 className="mb-4">📋 Beggar List</h2>
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

export default BeggarList;
