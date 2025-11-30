import React, { useState } from "react";
import portfolioData from "../data";
import "../styles.css";

const Projects = ({ data = portfolioData.projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  const currentProject = data[currentIndex];

  return (
    <section className="projects-section fade-in" id="projects">
      <div className="carousel-container">
        <h2 className="section-title">Proyectos Destacados</h2>

        {/* Carousel wrapper */}
        <div className="carousel-wrapper">
          {/* Navigation arrows */}
          <button
            className="carousel-nav carousel-nav-prev"
            onClick={prevProject}
            aria-label="Proyecto anterior"
          >
            ‹
          </button>

          {/* Project card */}
          <div className="carousel-track">
            <div className="carousel-project-card" key={currentIndex}>
              <div className="carousel-image-wrapper">
                <img
                  src={currentProject.coverImage?.url || currentProject.image}
                  alt={currentProject.coverImage?.alt || currentProject.name}
                  className="carousel-project-image"
                />
              </div>

              <div className="carousel-project-content">
                <div className="carousel-project-tags">
                  {currentProject.tags?.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>

                <h3 className="carousel-project-title">
                  {currentProject.title || currentProject.name}
                </h3>

                <p className="carousel-project-description">
                  {currentProject.description || currentProject.summary}
                </p>

                {currentProject.href && (
                  <a
                    href={currentProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="carousel-project-link"
                  >
                    Ver proyecto <span className="arrow">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            className="carousel-nav carousel-nav-next"
            onClick={nextProject}
            aria-label="Proyecto siguiente"
          >
            ›
          </button>
        </div>

        {/* Dots indicator */}
        <div className="carousel-dots">
          {data.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToProject(index)}
              aria-label={`Ir a proyecto ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="carousel-counter">
          {currentIndex + 1} / {data.length}
        </div>
      </div>
    </section>
  );
};

export default Projects;
