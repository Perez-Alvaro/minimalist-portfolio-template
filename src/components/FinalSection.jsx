import React from "react";
import portfolioData from "../data";
import "../styles.css";

const FinalSection = ({ data = portfolioData.finalSection }) => {
  return (

    <section className="final-section fade-in relative" id="contact">
      <div className="absolute inset-0 bg-white/80" /> {/* mejora contraste del texto */}
      <div className="final-container relative z-10">

        <h2 className="final-title text-gray-900">{data.title}</h2> {/* mejora contraste del texto */}
        <p className="final-description text-gray-700">{data.description}</p>
        <a href={data.buttonLink} className="btn final-button w-full sm:w-auto">

          {data.buttonText}
        </a>
      </div>
    </section>
  );
};

export default FinalSection;
