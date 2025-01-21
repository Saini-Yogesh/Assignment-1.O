import React from "react";
import styles from "./Header.module.css";
import HomeImage from "./home.png";
import Camera from "./camers.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.textContainer}>
        <p className={styles.smallText}>Discover your event</p>
        <h1 className={styles.mainText}>
          Your City, Your Event
          <img src={Camera} alt="Decorative" className={styles.topRightImage} />
        </h1>
        <p className={styles.description}>
          LocalVibes helps you find, list, and explore events tailored to your
          interests right within your area. Connect with your community!
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={HomeImage} alt="Event" className={styles.headerImage} />
      </div>
    </header>
  );
};

export default Header;
