import React from "react";
import portfolioData from "../data";

const icons = {
  LinkedIn: "/assets/linkedin.svg",
  GitHub: "/assets/github.svg",
  Email: "/assets/mail.svg",
};

const Footer = ({ data = portfolioData.footer }) => {
  return (
    <footer className="footer-section fade-in">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-company">{data.companyName}</h3>
          <p className="footer-description">{data.description}</p>
        </div>
        <div className="footer-links">
          {data.links.map((link, index) => (
            <a key={index} href={link.url} className="footer-link">
              <img src={icons[link.label]} alt={link.label + " icon"} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>{data.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
