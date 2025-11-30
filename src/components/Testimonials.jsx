import React from "react";
import portfolioData from "../data";
import "../styles.css";

const Testimonials = ({ data = portfolioData.testimonials }) => {
  return (
    <section className="testimonials-section fade-in" id="testimonials">
      <div className="testimonials-container">
        {data.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={item.avatar}
              alt={item.name}
              className="testimonial-avatar"
            />
            <p className="testimonial-text">“{item.text}”</p>
            <p className="testimonial-name">— {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
