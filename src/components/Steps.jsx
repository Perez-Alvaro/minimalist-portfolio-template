import React from "react";
import * as FiIcons from "react-icons/fi";
import portfolioData from "../data";

const titleStyle = {
  textAlign: "center",
  marginBottom: "24px",
  color: "var(--color-text)",
};

const highlight = "#CBFF00";

const Steps = ({ data = portfolioData.steps }) => {
  return (
    <section className="steps-section" id="steps">
      <h2 style={titleStyle}>Resumen de tu progreso</h2>
      <div className="steps-container">
        {data.map((step, index) => {
          const Icon = step.icon ? FiIcons[step.icon] : null;
          return (
            <div
              key={index}
              className="step-card"
              style={{ borderLeft: `4px solid ${highlight}` }}
            >
              <div
                className="step-number"
                style={{ backgroundColor: highlight }}
              >
                {step.step}
              </div>
              {Icon && (
                <Icon
                  className="step-icon"
                  style={{ color: highlight, fontSize: "24px", marginBottom: "16px" }}
                />
              )}
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Steps;
