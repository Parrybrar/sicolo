import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="main-content">
      <div className="hero">
        <h1 className="hero-title">Here are Projects</h1>
        <p className="hero-tagline">
          Minimal, striking, and timeless portfolios made easy.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>

      <div className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-row">
          <a href="/portfolio/project1" className="project-card" aria-label="Personal Portfolio Website">
            <div className="project-image project1-image" />
            <h3>Project One</h3>
            <p>A clean, functional website with modern UI.</p>
          </a>
          <a href="/portfolio/project2" className="project-card" aria-label="Mobile App UI Design">
            <div className="project-image project2-image" />
            <h3>Project Two</h3>
            <p>Brand identity and logo design for startup.</p>
          </a>
          <a href="/portfolio/project3" className="project-card" aria-label="Interactive Portfolio">
            <div className="project-image project3-image" />
            <h3>Project Three</h3>
            <p>Interactive portfolio with custom animations.</p>
          </a>
        </div>
      </div>

      <div className="about">
        <h2>About Portfolio Builder</h2>
        <p>Modern web portfolios with elegant, timeless visuals.</p>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} MinimalPortfolio. All Rights Reserved.</p>
      </footer>
    </section>
  );
}

export default HomePage;
