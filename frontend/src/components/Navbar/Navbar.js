import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LocalVibes</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#find-events">Find Events</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className={styles.authButtons}>
          <button className={styles.navButton}>Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
