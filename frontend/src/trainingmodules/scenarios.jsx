import phishing1 from "../assets/images/phishing1.png";
import phishing2 from "../assets/images/phishing2.png";
import phishing3 from "../assets/images/phishing3.png";
import phishing4 from "../assets/images/phishing4.png";
import phishing5 from "../assets/images/phishing5.png";
import pretexting1 from "../assets/images/pretexting1.png";
import pretexting2 from "../assets/images/pretexting2.png";
import pretexting3 from "../assets/images/pretexting3.png";
import pretexting4 from "../assets/images/pretexting4.png";
import baiting1 from "../assets/images/baiting1.png";
import cscam1 from "../assets/images/cscam1.png";
import tailgating from "../assets/images/tailgating1.png";
import vishing1 from "../assets/images/vishing1.png";

const images = {
  phishing1: phishing1,
  phishing2: phishing2,
  phishing3: phishing3,
  phishing4: phishing4,
  phishing5: phishing5,
  pretexting1: pretexting1,
  pretexting2: pretexting2,
  pretexting3: pretexting3,
  pretexting4: pretexting4,
  tailgating: tailgating,
  cscam1: cscam1,
  baiting1: baiting1,
  vishing1: vishing1


};
const scenarios = [
  {
    id: 1,
    context: "You receive a message claiming to be from Cloudflare, asking you to click the link provided. The message contains generic greetings and subtle grammar errors.",
    image: images.phishing1, 
    topic: "phishing",
    choices: [
      { 
        text: "Click the link to secure your account.", 
        feedback: "Incorrect. Clicking on links in unsolicited messages can expose you to phishing attacks designed to steal your credentials or inject malware."
      },
      { 
        text: "Inspect the link and verify it matches Cloudflare's official domain before taking action.", 
        feedback: "Correct. Always check the URL for authenticity, and avoid interacting with links in suspicious messages."
      },
      { 
        text: "Delete the message and report it to Cloudflare.", 
        feedback: "Correct. Reporting phishing attempts helps organizations take down malicious actors and improve security for everyone."
      },
    ],
  },
  
  
  {
    id: 2,
    context: "cssds",
    image: images.phishing2,
    topic: "phishing",
    choices: [
      { text: "sdsd", feedback: "ssds" },
      { text: "sdsd", feedback: "dsds" },
      { text: "dsds", feedback: "sds" },
    ],
  },
  {
    id: 3,
    context: "You are directed to a different website and see a message asking you to install vpn. This website claim to be an apple website",
    image: images.pretexting1,
    topic: "pretexting",
    choices: [
      { text: "sds", feedback: "sfs" },
      { text: "sds", feedback: "fssfs" },
      { text: "ds", feedback: "sfsd" },
    ],
  },
    {
      id: 4,
      context: "You receive an email claiming to be from your bank asking you to verify your account.The email looks slightly off, with a misspelled sender address and a request to verify your bank account details.",
      image: images.phishing3,
      topic: "phishing",
      choices: [
        { text: "Click the link and verify your account.", feedback: "phishing Attack ! This could expose your credentials to attackers." },
        { text: "Ignore the email.", feedback: "Safe! Ignoring such emails is a good practice." },
        { text: "Report the email to your bank.", feedback: "Safe! Reporting suspicious emails helps prevent scams." },
      ],
    },
    {
      id: 5,
      context: "A caller claims to be from IT support and asks for your login credentials.",
      image: images.pretexting2,
      topic: "pretexting",
      choices: [
        { text: "Provide the credentials.", feedback: "Risky! Sharing credentials over the phone is dangerous." },
        { text: "Hang up the call.", feedback: "Safe! Always verify the caller's identity." },
        { text: "Report the incident to your supervisor.", feedback: "Safe! Reporting such attempts ensures better security." },
      ],
    },
    {
      id: 6,
      context: "You find a USB drive labeled 'Confidential' in the parking lot of your office.",
      image: images.baiting1,
      topic: "baiting",
      choices: [
        { text: "Plug it into your computer to see what’s inside.", feedback: "Risky! Unknown devices can contain malware." },
        { text: "Hand it over to the IT department.", feedback: "Safe! IT can safely analyze the device." },
        { text: "Leave it where you found it.", feedback: "Neutral. However, reporting it is a better course of action." },
      ],
    },
    {
      id: 7,
      context: "You receive a text message saying you’ve won a gift card and need to click a link to claim it.",
      image: images.phishing4,
      topic: "phishing",
      choices: [
        { text: "Click the link to claim your prize.", feedback: "Risky! The link could steal your personal information." },
        { text: "Delete the text message.", feedback: "Safe! Ignoring such messages is wise." },
        { text: "Report the message to your carrier.", feedback: "Safe! Reporting it helps stop these scams." },
      ],
    },
    {
      id: 8,
      context: "A coworker asks you to share your password so they can complete an urgent task.",
      image: images.pretexting3,
      topic: "pretexting",
      choices: [
        { text: "Share your password with them.", feedback: "Risky! Never share passwords." },
        { text: "Offer to complete the task for them.", feedback: "Safe! Protect your credentials." },
        { text: "Ignore the request.", feedback: "Neutral. However, reporting suspicious behavior is better." },
      ],
    },
    {
      id: 9,
      context: "An unknown person follows you into a secure building, claiming they forgot their badge.",
      image: images.tailgating,
      topic: "tailgating",
      choices: [
        { text: "Let them in without questioning.", feedback: "Risky! Always verify their identity." },
        { text: "Report them to security.", feedback: "Safe! Reporting ensures building security." },
        { text: "Ask them to wait while you notify someone.", feedback: "Safe! Verification is key." },
      ],
    },
    {
      id: 10,
      context: "You receive a phone call claiming to be from a government agency demanding immediate payment.",
      image: images.vishing1,
      topic: "vishing",
      choices: [
        { text: "Make the payment to avoid trouble.", feedback: "Risky! Verify such claims independently." },
        { text: "Hang up and block the number.", feedback: "Safe! Always confirm the caller's legitimacy." },
        { text: "Call the agency directly to verify.", feedback: "Safe! Direct verification is the best course." },
      ],
    },
    {
      id: 11,
      context: "You are approached by someone claiming to be from a charity and asking for a donation.",
      image: images.cscam1,
      topic: "charity scam",
      choices: [
        { text: "Give them cash immediately.", feedback: "This is a potential scam. Risky! Verify the legitimacy of the charity before donating." },
        { text: "Ask for documentation and verify their credentials later.", feedback: "This is a potential scam. Safe! Always verify before donating." },
        { text: "Ignore and walk away.", feedback: "This is a potential scam. Neutral. Verifying and reporting such attempts is better." },
      ],
    },
    {
      id: 12,
      context: "A colleague asks for access to sensitive files, claiming their account has been locked.",
      image: images.pretexting4,
      topic: "pretexting",
      choices: [
        { text: "Share your login details.", feedback: "Risky! Never share your credentials." },
        { text: "Verify their account status with IT before proceeding.", feedback: "Safe! Verification is crucial." },
        { text: "Refuse their request without explanation.", feedback: "Neutral. However, informing IT is a better course of action." },
      ],
    },
    {
      id: 13,
      context: "You receive an email with a link to a free online course from an unknown sender.",
      image: images.phishing5,
      topic: "phishing",
      choices: [
        { text: "Click the link to enroll.", feedback: "Risky! Links from unknown senders can be malicious." },
        { text: "Ignore the email.", feedback: "Safe! Always be cautious with unsolicited emails." },
        { text: "Research the course provider independently before deciding.", feedback: "Safe! Verifying information reduces risks." },
      ],
    },
  ];
  
  export default scenarios;