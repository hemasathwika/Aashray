// src/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shelters">Shelters</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/donations">Donations</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/beggars">Beggars</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/volunteers">Volunteers</Link></li>
            </ul>
          </div> */}
        </div>
      </nav>

      {/* Page Content */}
      <main style={{ paddingTop: '90px' }} className="container">
        {children}
      </main>
    </div>
  );
}

export default Layout;
