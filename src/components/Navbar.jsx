import React, { useEffect, useState } from "react";
import portfolioData from "../data";
import "../styles.css";

const Navbar = ({ data = portfolioData.navbar }) => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = data.links
      .map((link) => link.url.startsWith("#") ? document.querySelector(link.url) : null)
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, [data.links]);

  const handleClick = (e, url) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(url);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setActiveSection(url);
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar glassy-navbar fade-in">
      <div className="nav-container">
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`nav-pill ${activeSection === link.url ? "active" : ""}`}
              onClick={(e) => handleClick(e, link.url)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="mailto:perezalvarozul24@gmail.com" className="nav-cta">
          Escribime
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
