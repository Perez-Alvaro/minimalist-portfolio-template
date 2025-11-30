import React from "react";
import portfolioData from "../data";
import "../styles.css";

const Skills = ({ data = portfolioData.skills }) => {
  // Organize skills by category groups
  const designSkills = data.filter(item =>
    ['UX/UI', 'Diseño'].some(cat => item.category?.includes(cat))
  );

  const devSkills = data.filter(item =>
    ['Frontend', 'Backend', 'Lenguaje', 'Base de Datos', 'DevOps', 'Control de Versiones'].includes(item.category)
  );

  const softSkills = data.filter(item =>
    ['Management', 'Soft Skill'].includes(item.category)
  );

  return (
    <section className="skills-section-new fade-in" id="skills">
      <div className="skills-container-new">
        <h2 className="skills-main-title">Habilidades</h2>

        {/* DISEÑO */}
        {designSkills.length > 0 && (
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">🎨</div>
              <h3 className="category-title">Diseño</h3>
            </div>
            <div className="skill-cards-row">
              {designSkills.map((skill, idx) => (
                <div key={idx} className="skill-card-horizontal">
                  <span className="skill-card-text">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DESARROLLO */}
        {devSkills.length > 0 && (
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">👨‍💻</div>
              <h3 className="category-title">Desarrollo</h3>
            </div>
            <div className="skill-cards-row">
              {devSkills.map((skill, idx) => (
                <div key={idx} className="skill-card-horizontal">
                  <span className="skill-card-text">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HABILIDADES BLANDAS */}
        {softSkills.length > 0 && (
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">💬</div>
              <h3 className="category-title">Habilidades Blandas</h3>
            </div>
            <div className="skill-cards-row">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="skill-card-horizontal">
                  <span className="skill-card-text">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
