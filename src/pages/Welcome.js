import React from "react";
import "./Welcome.css";

const Welcome = () => {
  const handleExploreClick = () => {
    alert("Navigate to Gallery!"); // Replace this with your actual navigation logic
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">
        Welcome to <span className="highlight">SnapToSketch</span> 👋
      </h1>
      <p className="welcome-subtitle">
        CEO & Co-Founder: <span className="highlight">Yamini Rajanala</span>
      </p>

      <button className="cta-button" onClick={handleExploreClick}>
        🎨 Explore Gallery
      </button>

      <p className="welcome-footer">
        © 2025 SnapToSketch. All rights reserved.
      </p>
    </div>
  );
};

export default Welcome;
