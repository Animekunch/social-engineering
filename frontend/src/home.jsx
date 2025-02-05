import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getPersonalizedName = () => {
    if (user?.displayName) {
      return user.displayName;
    } else if (user?.email) {
      return user.email.split("@")[0];
    }
    return "Guest";
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <i className="fas fa-spinner fa-spin" style={styles.spinner}></i>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <i className="fas fa-shield-alt" style={styles.mainIcon}></i>
        <h1 style={styles.title}>CyberDefense Training</h1>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.card}>
          <p style={styles.description}>
            Welcome to the Social Engineering Defense Training application! This
            platform is designed to help you enhance your knowledge and skills to
            identify and defend against social engineering threats. Learn
            strategies, take part in interactive training scenarios, and get feedback
            to become more cyber-aware.
          </p>
        </div>

        <h2 style={styles.welcomeText}>
          <i className="fas fa-user-check" style={styles.icon}></i>
          {user ? `Welcome, ${getPersonalizedName()}!` : "Welcome to the App!"}
        </h2>

        {!user && (
          <p style={styles.subText}>
            To get started, log in and explore our training modules designed to
            boost your cybersecurity skills.
          </p>
        )}

        <div style={styles.buttonContainer}>
          {!user ? (
            <button
              onClick={() => navigate("/login")}
              style={styles.button}
            >
              <i className="fas fa-sign-in-alt" style={styles.buttonIcon}></i>
              Login to Access Training
            </button>
          ) : (
            <button
              onClick={() => navigate("/training")}
              style={styles.button}
            >
              <i className="fas fa-book-open" style={styles.buttonIcon}></i>
              Explore Training Modules
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(160deg, #091c2e 0%, #15334f 100%)',
    color: '#ffffff',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#091c2e',
  },
  spinner: {
    fontSize: '3rem',
    color: '#4a90e2',
  },
  heroSection: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  mainIcon: {
    fontSize: '4rem',
    color: '#4a90e2',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    letterSpacing: '1px',
    margin: '0',
  },
  contentSection: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  card: {
    background: 'rgba(21, 51, 79, 0.8)',
    borderRadius: '15px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    margin: '0',
    color: '#e0e0e0',
  },
  welcomeText: {
    fontSize: '2rem',
    margin: '2rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  icon: {
    color: '#4a90e2',
    fontSize: '1.5em',
  },
  subText: {
    fontSize: '1.1rem',
    textAlign: 'center',
    margin: '1rem 0 2rem',
    color: '#cccccc',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  button: {
    background: '#4a90e2',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  buttonIcon: {
    fontSize: '1.2em',
  },
};

export default Home;