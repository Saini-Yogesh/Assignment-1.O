import React from "react";
import styles from "./Stats.module.css";

const Stats = () => {
  const statsData = [
    { value: "1,000+", label: "Events Listed" },
    { value: "500+", label: "Active Users" },
    { value: "100+", label: "Event Types" },
    { value: "30+", label: "Cities Covered" },
  ];

  return (
    <div className={styles.statsContainer}>
      {statsData.map((item, index) => (
        <div key={index} className={styles.statItem}>
          <p className={styles.statValue}>{item.value}</p>
          <p className={styles.statLabel}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
