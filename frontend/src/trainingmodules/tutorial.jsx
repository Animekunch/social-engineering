import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faUserCheck, 
  faDoorOpen, 
  faMagnet, 
  faHandsHelping 
} from "@fortawesome/free-solid-svg-icons";

const Tutorial = () => {
  const styles = {
    container: { 
      background: "none",
      padding: "40px",
      maxWidth: "1200px",
      margin: "0 auto",
      lineHeight: "1.6",
      textAlign: "center"
    },
    heading: {
      color: "#2c3e50",
      borderBottom: "2px solid #3498db",
      paddingBottom: "10px",
      marginBottom: "30px"
    },
    section: {
      background: "#091c2e",
      marginBottom: "40px",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "left"
    },
    example: {
      background: "#15334f",
      padding: "15px",
      borderRadius: "5px",
      margin: "15px 0"
    },
    solution: {
      background: "#49749d",
      padding: "15px",
      borderRadius: "5px",
      margin: "15px 0"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Tutorial</h1>

      {/* Introduction Section - Enhanced */}
      <div style={styles.section}>
        <h2>Understanding Social Engineering</h2>
        <p>
          Social engineering attacks manipulate human psychology rather than 
          exploiting technical vulnerabilities. These attacks follow a common pattern:
        </p>
        <ol>
          <li><strong>Research:</strong> Attacker gathers information about targets</li>
          <li><strong>Hook:</strong> Creates a believable scenario (emergency, reward)</li>
          <li><strong>Play:</strong> Executes the attack to extract information</li>
          <li><strong>Exit:</strong> Disengages without raising suspicion</li>
        </ol>
      </div>

      {/* Phishing Section */}
      <div style={styles.section}>
        <h2>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
          Phishing Attacks
        </h2>
        <p>
          The most common digital social engineering attack, typically via email,
          text, or social media.
        </p>
        
        <div style={styles.example}>
          <h4>Real-World Example:</h4>
          <p>
            "Urgent: Your corporate email password expires in 2 hours. 
            Click here to renew immediately or lose access."
          </p>
        </div>

        <div style={styles.solution}>
          <h4>Defense Strategies:</h4>
          <ul>
            <li>Verify sender email addresses (hover over links)</li>
            <li>Look for grammatical errors and urgency cues</li>
            <li>Use corporate verification channels for confirmation</li>
          </ul>
        </div>
      </div>

      {/* Vishing Section */}
      <div style={styles.section}>
        <h2>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
          Vishing (Voice Phishing)
        </h2>
        <p>
          Voice-based attacks using spoofed caller IDs and social pressure tactics.
        </p>

        <div style={styles.example}>
          <h4>Common Scenario:</h4>
          <p>
            "This is your IT department. We've detected malware on your computer. 
            Please install this remote access software immediately."
          </p>
        </div>

        <div style={styles.solution}>
          <h4>Protection Measures:</h4>
          <ul>
            <li>Always request callback through official numbers</li>
            <li>Never share credentials over the phone</li>
            <li>Report suspicious calls to security teams</li>
          </ul>
        </div>
      </div>

      {/* Pretexting Section */}
      <div style={styles.section}>
        <h2>
          <FontAwesomeIcon icon={faUserCheck} style={{ marginRight: "8px" }} />
          Pretexting
        </h2>
        <p>
          Creating fabricated scenarios to establish credibility before asking 
          for sensitive information.
        </p>

        <div style={styles.example}>
          <h4>Corporate Example:</h4>
          <p>
            "Hello, I'm from the Facilities team. We need to verify your employee 
            ID for the new security system. Can you confirm your details?"
          </p>
        </div>

        <div style={styles.solution}>
          <h4>Verification Protocol:</h4>
          <ul>
            <li>Confirm requester identity through multiple channels</li>
            <li>Follow official verification procedures</li>
            <li>Report unsolicited verification requests</li>
          </ul>
        </div>
      </div>

      {/* Tailgating Prevention */}
      <div style={styles.section}>
        <h2>
          <FontAwesomeIcon icon={faDoorOpen} style={{ marginRight: "8px" }} />
          Tailgating Prevention
        </h2>
        <div style={styles.example}>
          <h4>Physical Security Example:</h4>
          <p>
            An unfamiliar person follows employees through secure doors during 
            shift changes, claiming to be a new contractor.
          </p>
        </div>
      </div>

      {/* Baiting Attacks Section - New */}
      <div style={styles.section}>
        <h2>
          <FontAwesomeIcon icon={faMagnet} style={{ marginRight: "8px" }} />
          Baiting Attacks
        </h2>
        <p>
          Baiting involves luring victims with attractive offers—such as free items or USB drives—to compromise their security.
        </p>

        <div style={styles.example}>
          <h4>Illustrative Example:</h4>
          <p>
            "A USB drive labeled 'Employee Bonuses' is left in the parking lot. 
            Curious employees pick it up, unknowingly installing malware on their systems."
          </p>
        </div>

        <div style={styles.solution}>
          <h4>Defense Strategies:</h4>
          <ul>
            <li>Avoid using or plugging in unknown devices</li>
            <li>Educate employees about the risks of unsolicited offers</li>
            <li>Implement strict policies regarding external media usage</li>
          </ul>
        </div>
      </div>

      {/* Charity Scam Attacks Section - New */}
      <div style={styles.section}>
        <h2>
          <FontAwesomeIcon icon={faHandsHelping} style={{ marginRight: "8px" }} />
          Charity Scam Attacks
        </h2>
        <p>
          Charity scams exploit goodwill by soliciting donations for fraudulent causes.
        </p>

        <div style={styles.example}>
          <h4>Real-World Example:</h4>
          <p>
            "A message claims that a natural disaster has hit a region, urging you to donate immediately via an unverified link."
          </p>
        </div>

        <div style={styles.solution}>
          <h4>Prevention Measures:</h4>
          <ul>
            <li>Verify the legitimacy of charities through trusted sources</li>
            <li>Check for official registration and reviews</li>
            <li>Research before making any donations</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Tutorial;
