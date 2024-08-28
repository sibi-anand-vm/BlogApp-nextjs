"use client";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Contact Us</h4>
          <p>Email: info@jorahsgallery.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>&copy; 2024 Jorah's Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "100px", // Pushes footer to the bottom   ideal 160
  },
  footerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  footerSection: {
    margin: "5px 0",
  },
  footerHeading: {
    fontSize: "1.2em",
    marginBottom: "10px",
  },
  footerBottom: {
    borderTop: "1px solid #555",
    paddingTop: "10px",
  },
};

// Add media query directly to the CSS if using a CSS-in-JS library
const mediaQuery = "@media (max-width: 600px)";
styles.footerContent[mediaQuery] = {
  flexDirection: "column",
  textAlign: "center",
};

// Ensure that the footer is pushed to the bottom
document.body.style.minHeight = "100vh";
document.documentElement.style.display = "flex";
document.documentElement.style.flexDirection = "column";
