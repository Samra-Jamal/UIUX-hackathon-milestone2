import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>     {/* Link to Home */}
        <li><Link to="/about">About</Link></li>  {/* Link to About */}
        <li><Link to="/contact">Contact</Link></li> {/* Link to Contact */}
      </ul>
    </nav>
  );
}

export default Navbar;
