import React, { useRef, useState } from "react";
import portfolioData from "../data";
import ProjectModal from "./ProjectModal";
import "../styles.css";

const Projects = ({ data = portfolioData.projects }) => {
  const [selected, setSelected] = useState(null);
  const originRef = useRef(null);

  const openModal = (project, button) => {
    setSelected(project);
    originRef.current = button;
  };

  const closeModal = () => {
    setSelected(null);
    originRef.current?.focus();
  };

  return (
    <section className="projects-section fade-in" id="projects">
      <div className="projects-container">
        {data.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.coverImage.url}
              alt={project.coverImage.alt}
              className="project-image"
              loading="lazy"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.summary}</p>

            <button
              className="btn project-link"
              onClick={(e) => openModal(project, e.currentTarget)}
              disabled={project.meta.status !== "online"}
            >
              Ver proyecto<span className="icon">→</span>
            </button>
          </div>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={closeModal} />}
    </section>
  );
};

export default Projects;
