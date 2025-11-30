import React from "react";
import portfolioData from "../data";
import "../styles.css";

const About = ({ data = portfolioData.about }) => {
  return (
    <section className="about-section relative" id="about">
      <div className="absolute inset-0 bg-white/80 dark:bg-black/80" /> {/* dark mode support */}
      <div className="about-container relative z-10">
        {/* Columna izquierda: texto */}
        <div className="about-content">
          <span className="about-tag">{data.tag}</span>

          <h2 className="about-title text-gray-900 dark:text-white">{data.title}</h2>
          <p className="about-description text-gray-700 dark:text-gray-200">{data.description}</p>
          <a href={data.buttonLink} className="btn about-button w-full sm:w-auto"> {/* botones unificados */}
            {data.buttonText}
          </a>
        </div>

        {/* Columna derecha: imagen */}
        <div className="about-image">
          <img src="/assets/about-illustration.png" alt="About Illustration" className="w-64 h-64 rounded-full object-cover" /> {/* recorta la foto */}
        </div>

      </div>
    </section>
  );
};

export default About;
