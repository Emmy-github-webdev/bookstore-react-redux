import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="container-icon"><Link to="/" className="primary-icon">Bookstore CMS</Link></div>
      <div className="nav-list" id="nav-list">
        <Link to="/" className="book">Books</Link>
        <Link to="/categories" className="categories">Categories</Link>
      </div>
      <div className="menu" id="toggle-button">
        <div className="menu-line" />
        <div className="menu-line" />
        <div className="menu-line" />
      </div>
    </nav>
  );
}

export default Header;
