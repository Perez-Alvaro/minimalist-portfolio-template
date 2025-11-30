import React from "react";
import portfolioData from "../data";
import "../styles.css";

const Career = ({ experience = portfolioData.experience, education = portfolioData.education }) => (
  <>
    <section className="career-section fade-in" id="experiencia">
      <div className="career-container single">
        <div className="career-column">
          <h2 className="career-title">Experiencia</h2>
          {experience.map((item, index) => (
            <div key={index} className="career-item">
              <div className="career-year">{item.year}</div>
              <div className="career-role">{item.role}</div>
              <p className="career-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="career-section fade-in" id="educacion">
      <div className="career-container single">
        <div className="career-column">
          <h2 className="career-title">Educación</h2>
          {education.map((item, index) => (
            <div key={index} className="career-item">
              <div className="career-year">{item.year}</div>
              <div className="career-role">{item.title}</div>
              <p className="career-description">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Career;
