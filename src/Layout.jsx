import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // reuse navbar styles here

function Layout({ children }) {
  return (
    <div className="layout">
      {/* Vertical Glass Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About</Link>
        <Link to="/portfolio" className="nav-btn">Portfolio</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
        <Link to="/login" className="nav-btn">Login</Link>
      </nav>

      {/* Main content area */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;
