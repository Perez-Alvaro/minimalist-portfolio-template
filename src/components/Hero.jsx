import React, { useEffect, useState } from "react";
import portfolioData from "../data";
import "../styles.css";

// Apple-inspired minimalist hero section
// Maximum whitespace, centered content, clean typography
const Hero = ({ data = portfolioData.hero }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <section
      role="banner"
      className="hero-section relative flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 transition-colors duration-300 dark:bg-[#111111] dark:text-white"
      style={{ padding: "var(--spacing-section-desktop) var(--spacing-lg)" }}
    >
      {/* Ultra-subtle theme toggle */}
      <button
        onClick={toggleTheme}
        role="switch"
        aria-label={
          theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
        }
        aria-checked={theme === "dark"}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-lg transition-all duration-200 hover:bg-black/5 focus:outline-none dark:hover:bg-white/10"
        style={{ opacity: 0.4 }}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* Centered hero content with maximum spacing */}
      <div className="hero-content flex flex-col items-center justify-center text-center" style={{ maxWidth: "900px", padding: "0 var(--spacing-lg)" }}>
        <h1
          className="hero-title font-bold tracking-tight"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
            lineHeight: "0.95",
            marginBottom: "var(--spacing-md)",
            letterSpacing: "-0.03em",
            fontWeight: "700"
          }}
        >
          {data.title}
        </h1>

        <h2
          className="hero-subtitle font-medium"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#6B7280",
            marginBottom: "var(--spacing-sm)",
            fontWeight: "500",
            letterSpacing: "-0.01em"
          }}
        >
          {data.name}
        </h2>

        <h3
          className="hero-description"
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
            color: "#9CA3AF",
            marginBottom: "var(--spacing-xl)",
            lineHeight: "1.8",
            maxWidth: "32rem",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {data.role}
        </h3>

        {data.buttonText && (
          <a
            href={data.buttonLink}
            className="btn hero-btn"
            style={{
              marginTop: "var(--spacing-lg)",
              padding: "1rem 2.5rem",
              fontSize: "1.0625rem",
              fontWeight: "600"
            }}
          >
            {data.buttonText}
          </a>
        )}
      </div>

      {/* Subtle bottom gradient for section transition */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          height: "120px",
          background: "linear-gradient(to bottom, transparent, rgba(250, 251, 252, 0.3))",
          opacity: 0.6
        }}
      />
    </section>
  );
};

export default Hero;
