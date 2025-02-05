import React, { useState } from "react";
import scenarios from "./scenarios"; // Import scenarios from scenarios.js

function Simulator() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState(new Set()); // Track completed scenarios

  const currentScenario = scenarios[currentScenarioIndex];

  const handleChoiceSelection = (index) => {
    setSelectedChoiceIndex(index);
    setCompletedScenarios((prevSet) => new Set(prevSet).add(currentScenarioIndex)); // Mark the scenario as completed

    // Only show confirmation if not the last scenario
    if (currentScenarioIndex < scenarios.length - 1) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmNext = () => {
    setShowConfirmation(false);
    setSelectedChoiceIndex(null);

    // Move to the next scenario or stay on the last one
    setCurrentScenarioIndex((prevIndex) => Math.min(prevIndex + 1, scenarios.length - 1));
  };

  const handleCancelNext = () => {
    setShowConfirmation(false);
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setSelectedChoiceIndex(null);
    setShowConfirmation(false);
    setCompletedScenarios(new Set()); // Reset completed scenarios
  };

  const progressPercentage = ((currentScenarioIndex + 1) / scenarios.length) * 100;

  // Check if the user has completed all scenarios
  const hasCompletedAllScenarios = completedScenarios.size === scenarios.length;

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "800px",
      margin: "auto",
      minHeight: "100vh",
      backgroundColor: "#091c2e",
      color: "#e0e0e0",
      fontFamily: "'Segoe UI', sans-serif"
    },
    navigation: {
      marginBottom: "20px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "8px",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "#15334f"
    },
    button: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "500"
    },
    scenarioCard: {
      backgroundColor: "#15334f",
      padding: "20px",
      borderRadius: "12px",
      marginBottom: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)"
    },
    progressBar: {
      height: "10px",
      backgroundColor: "#2d4357",
      borderRadius: "5px",
      overflow: "hidden",
      marginBottom: "15px"
    },
    choiceButton: {
      display: "block",
      width: "100%",
      margin: "10px 0",
      padding: "12px",
      backgroundColor: "#2d4357",
      color: "#fff",
      border: "1px solid #3a556e",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      textAlign: "left"
    },
    confirmationDialog: {
      marginTop: "20px",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "#15334f",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
      textAlign: "center"
    }
  };

  return (
    <div style={styles.container}>
      {/* Completed Screen */}
      {hasCompletedAllScenarios ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h1 style={{ color: "#00bfff", marginBottom: "20px" }}>Congratulations! 🎉</h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
            You've successfully completed all scenarios!
          </p>
          <button
            onClick={handleRestart}
            style={{
              ...styles.button,
              backgroundColor: "#00bfff",
              padding: "12px 30px",
              fontSize: "1.1rem",
              ':hover': {
                backgroundColor: "#009acd"
              }
            }}
          >
            Restart Simulation
          </button>
        </div>
      ) : (
        <>
          {/* Navigation */}
          <nav style={styles.navigation}>
            {/* Previous Button */}
            <button
              onClick={() => {
                setCurrentScenarioIndex((prev) => Math.max(prev - 1, 0));
                setSelectedChoiceIndex(null);
                setShowConfirmation(false);
              }}
              style={{
                ...styles.button,
                backgroundColor: currentScenarioIndex === 0 ? "#2d4357" : "#00bfff",
                color: currentScenarioIndex === 0 ? "#6b7c8d" : "#fff",
                cursor: currentScenarioIndex === 0 ? "not-allowed" : "pointer"
              }}
              disabled={currentScenarioIndex === 0}
            >
              &lt; Previous
            </button>

            {/* Scenario Buttons */}
            {scenarios.map((_, index) => (
              <button
                key={index}
                onClick={() => index <= currentScenarioIndex && setCurrentScenarioIndex(index)}
                style={{
                  ...styles.button,
                  backgroundColor: currentScenarioIndex === index ? "#00bfff" : "#2d4357",
                  color: "#fff",
                  cursor: index <= currentScenarioIndex ? "pointer" : "not-allowed"
                }}
                disabled={index > currentScenarioIndex}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => {
                setCurrentScenarioIndex((prev) => Math.min(prev + 1, scenarios.length - 1));
                setSelectedChoiceIndex(null);
                setShowConfirmation(false);
              }}
              style={{
                ...styles.button,
                backgroundColor: currentScenarioIndex === scenarios.length - 1 ? "#2d4357" : "#00bfff",
                color: currentScenarioIndex === scenarios.length - 1 ? "#6b7c8d" : "#fff",
                cursor: currentScenarioIndex === scenarios.length - 1 ? "not-allowed" : "pointer"
              }}
              disabled={currentScenarioIndex === scenarios.length - 1}
            >
              Next &gt;
            </button>
          </nav>

          {/* Progress Bar */}
          <div style={{ marginBottom: "25px" }}>
            <div style={styles.progressBar}>
              <div
                style={{
                  height: "100%",
                  width: `${progressPercentage}%`,
                  backgroundColor: "#2ba3a5",
                  transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              />
            </div>
            <p style={{ 
              textAlign: "right", 
              color: "#8f9ead", 
              fontSize: "0.9rem",
              marginTop: "5px"
            }}>
              Progress: {currentScenarioIndex + 1}/{scenarios.length}
            </p>
          </div>

          {/* Scenario Content */}
          <div style={styles.scenarioCard}>
            <h2 style={{ 
              color: "#00bfff", 
              marginBottom: "15px",
              fontSize: "1.4rem"
            }}>
              Scenario {currentScenario.id}
            </h2>
            
            <p style={{ 
              lineHeight: "1.6", 
              marginBottom: "20px",
              fontSize: "1.1rem"
            }}>
              {currentScenario.context}
            </p>

            <img
              src={currentScenario.image}
              alt={`Scenario ${currentScenario.id}`}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "20px",
                border: "2px solid #3a556e"
              }}
            />

            {/* Choices */}
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ 
                color: "#2ba3a5", 
                marginBottom: "15px",
                fontSize: "1.2rem"
              }}>
                What would you do?
              </h3>
              
              {currentScenario.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoiceSelection(index)}
                  style={{
                    ...styles.choiceButton,
                    backgroundColor: selectedChoiceIndex === index ? "#2ba3a5" : styles.choiceButton.backgroundColor,
                    borderColor: selectedChoiceIndex === index ? "#38c9c9" : styles.choiceButton.borderColor,
                    transform: selectedChoiceIndex === index ? "scale(1.02)" : "none"
                  }}
                >
                  {choice.text}
                </button>
              ))}
            </div>

            {/* Feedback */}
            {selectedChoiceIndex !== null && (
              <div style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "#1a3b5a",
                borderRadius: "8px",
                borderLeft: "4px solid #2ba3a5"
              }}>
                <p style={{ 
                  color: "#fff", 
                  margin: 0,
                  lineHeight: "1.6"
                }}>
                  {currentScenario.choices[selectedChoiceIndex].feedback}
                </p>
              </div>
            )}
          </div>

          {/* Confirmation Dialog */}
          {showConfirmation && (
            <div style={styles.confirmationDialog}>
              <p style={{ 
                fontSize: "1.1rem", 
                marginBottom: "20px",
                color: "#8f9ead"
              }}>
                Ready for the next challenge?
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                <button
                  onClick={handleConfirmNext}
                  style={{
                    ...styles.button,
                    backgroundColor: "#2ba3a5",
                    padding: "10px 25px",
                    ':hover': {
                      backgroundColor: "#228f8f"
                    }
                  }}
                >
                  Continue
                </button>
                <button
                  onClick={handleCancelNext}
                  style={{
                    ...styles.button,
                    backgroundColor: "#3a556e",
                    padding: "10px 25px",
                    ':hover': {
                      backgroundColor: "#2d4357"
                    }
                  }}
                >
                  Stay Here
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Simulator;
