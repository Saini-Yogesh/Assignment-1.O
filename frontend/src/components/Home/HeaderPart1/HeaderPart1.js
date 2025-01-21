import React from "react";
import styles from "./HeaderPart1.module.css";
import image1 from "./image1.png";
import image2 from "./image2.png";

const HeaderPart1 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={image1} alt="First" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.smallText}>Your Event Hub</p>
          <p className={styles.mainHeading}>Find Your Next Adventure </p>
          <p className={styles.mainText}>
            Discover a variety of events that cater to your preferences—live
            music, art shows, workshops, and more. Join the festivities!
          </p>
          <button className={styles.button}>Join Now</button>
        </div>
        <div className={styles.imageWrapper}>
          <img src={image2} alt="Second" className={styles.image} />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default HeaderPart1;
