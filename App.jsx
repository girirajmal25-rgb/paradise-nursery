
import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/products";
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <h2>Welcome to Paradise Nursery</h2>

        <p>
          Discover beautiful plants and bring nature
          into your home. Explore our collection of
          indoor and outdoor plants.
        </p>

        <button onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
