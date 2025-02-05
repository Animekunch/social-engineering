import React, { useState } from "react";
import Simulator from "./simulator";
import Tutorial from "./tutorial";

const TrainingModules = () => {
  const [currentPage, setCurrentPage] = useState("tutorial");

  // Define the pages
  const pages = {
    tutorial: <Tutorial />,
    simulator: <Simulator />,
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={{ marginBottom: "15px", position: "sticky", top: "0", padding: "10px" }}>
        <button
          onClick={() => handleNavigation("tutorial")}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: currentPage === "tutorial" ? "#2ba3a5" : "#ccc",
            color: currentPage === "tutorial" ? "#fff" : "#000",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Tutorial
        </button>
        <button
          onClick={() => handleNavigation("simulator")}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: currentPage === "simulator" ? "#2ba3a5" : "#ccc",
            color: currentPage === "simulator" ? "#fff" : "#000",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Simulator
        </button>
      </nav>
      {/* Display Current Page */}
      <div>{pages[currentPage]}</div>
    </div>
  );
};

export default TrainingModules;
