import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.column} ${styles.logoColumn}`}>
          <p className={styles.logo}>LocalVibes</p>
        </div>

        <div className={styles.column}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Events</h3>
          <ul>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#list-event">List Event</a>
            </li>
            <li>
              <a href="#help">Help</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contact</h3>
          <p>localvibes@gmail.com</p>
          <p>+91 7845123698</p>
          <div className={styles.socialIcons}>
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <p>© 2025 LocalVibes. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
