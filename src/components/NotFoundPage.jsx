import React from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

const NotFound = () => {
  return (
    <div style={styles.container} >
      {/* <div style={styles.navbarContainer}>
        <Navbar />
      </div> */}

      <div style={styles.content}>
        <h1 style={styles.title}>404 - Page Not Found!</h1>
        <p style={styles.message}>
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <img src="./images/404.gif" alt="Page not found" style={styles.image} />
        <Link to="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  navbarContainer: {
    backgroundColor: "blue",
    width: "100%", // Ensure the navbar spans the full width
    padding: "10px 0", // Add some padding for better visuals
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginTop: "50px",
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  message: {
    fontSize: "1.25rem",
    marginBottom: "20px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "20px",
  },
  button: {
    fontSize: "1.25rem",
    padding: "10px 20px",
    marginTop: "20px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
  },
};

export default NotFound;
