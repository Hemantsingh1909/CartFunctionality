import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Connect With Me</h4>
            <div className={styles.buttonContainer}>
              <a
                href="https://www.linkedin.com/in/hemantsatwal/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Hemantsingh1909"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:hemantsingh1909@gmail.com"
                className={styles.socialButton}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://hemantsingh1909.github.io/CartFunctionality/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                aria-label="Portfolio"
              >
                <FaCode />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © {currentYear} Hemant Singh. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
