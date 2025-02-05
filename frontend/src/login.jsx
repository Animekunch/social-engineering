import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login({ onLogin }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      onLogin(userCredential.user);
      navigate("/");
    } catch (error) {
      setError("Google Sign-In failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.heading}>
          <i className="fas fa-sign-in-alt" style={styles.icon}></i>
          Login
        </h1>
        
        {error && (
          <div style={styles.error}>
            <i className="fas fa-exclamation-circle" style={styles.errorIcon}></i>
            {error}
          </div>
        )}

        <button 
          style={styles.googleButton} 
          onClick={handleGoogleSignIn} 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <i className="fas fa-spinner fa-spin" style={styles.buttonIcon}></i>
              Signing in...
            </>
          ) : (
            <>
              <i className="fab fa-google" style={styles.buttonIcon}></i>
              Continue with Google
            </>
          )}
        </button>

        <button 
          style={styles.backButton}
          onClick={() => navigate("/")}
        >
          <i className="fas fa-home" style={styles.buttonIcon}></i>
          Back to Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#091c2e",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  loginBox: {
    backgroundColor: "#15334f",
    padding: "2rem 3rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    color: "white",
    maxWidth: "400px",
    width: "90%",
  },
  heading: {
    marginBottom: "2rem",
    fontSize: "1.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#4dabf7",
  },
  googleButton: {
    backgroundColor: "#ffffff",
    color: "#15334f",
    padding: "0.8rem 1.5rem",
    borderRadius: "5px",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    width: "100%",
    margin: "1rem 0",
    transition: "transform 0.2s ease",
  },
  backButton: {
    backgroundColor: "transparent",
    color: "#ffffff",
    padding: "0.6rem 1.5rem",
    borderRadius: "5px",
    border: "1px solid #4dabf7",
    fontSize: "0.9rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    width: "100%",
    transition: "all 0.2s ease",
  },
  buttonIcon: {
    fontSize: "1.2rem",
  },
  error: {
    backgroundColor: "#ffd2d2",
    color: "#d8000c",
    padding: "0.8rem",
    borderRadius: "5px",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },
  errorIcon: {
    fontSize: "1rem",
  },
};

export default Login;