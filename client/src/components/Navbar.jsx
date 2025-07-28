// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles.css'; // if you're styling globally

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Aashray</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donations">Donations</Link></li>
        <li><Link to="/shelters">Shelters</Link></li>
        <li><Link to="/beggars">Beggars</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
