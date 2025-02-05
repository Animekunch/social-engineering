import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import TrainingModules from "./trainingmodules/trainingModules";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

// Header Component
function Header({ user, handleLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getPersonalizedName = () => {
    if (user?.displayName) return user.displayName;
    if (user?.email) return user.email.split("@")[0];
    return "Guest";
  };

  return (
    <header className="header">
      <div className="nav-brand">
        <p className="title">
          <Link to="/">Social Engineering Defense Training</Link>
        </p>
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          {user && (
            <li className="">
              <Link to="/training">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ marginRight: "8px" }}
                />
                Training
              </Link>
            </li>
          )}
          <li>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </button>
            {dropdownOpen && (
              <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                <p>
                  <strong>Username:</strong> {getPersonalizedName()}
                </p>
                {user?.email && (
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                )}
                {user && (
                  <p>
                    <Link to="/history">History</Link>
                  </p>
                )}
                {user ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                )}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 social Engineering training</p>
    </footer>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:"); // Log any errors to the console   ,error
    }
  };

  return (
    <Router>
      {/* Shared Header */}
      <Header user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/training"
            element={user ? <TrainingModules /> : <Navigate to="/login" />}
          />
          <Route
            path="/history"
            element={
              user ? (
                <div>
                  <h1>User History</h1>
                  <p>Mock history content goes here...</p>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </main>
      {/* Shared Footer */}
      <Footer />
    </Router>
  );
}

export default App;
