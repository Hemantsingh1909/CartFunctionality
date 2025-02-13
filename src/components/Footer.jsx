import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";

import styles from "../styles/Footer.module.css"; // Create a CSS file for styling

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.buttonContainer}>
          <button className={styles.socialButton}>
          <a href="https://www.linkedin.com/in/hemantsatwal/" target="_blank" rel="noopener noreferrer">
            <SlSocialLinkedin />
          </a>
          </button>
          <button className={styles.socialButton}>
          <a href="https://github.com/Hemantsingh1909" target="_blank" rel="noopener noreferrer">
          <SlSocialGithub />
          </a>
          </button>
        </div>
        <div className={styles.copyright}>© 2025 Copyright: Hemant Singh</div>
      </footer>
    </div>
  );
};

export default Footer;
