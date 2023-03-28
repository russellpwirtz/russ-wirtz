import React, { useState } from "react";
import styles from "../styles/CheckinComponent.module.css";

const CheckinComponent = ({ user, pets }) => {
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheckin = () => {
    if (!checkedIn) {
      setCheckedIn(true);
      // Add check-in logic here
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Daily Checkin</h1>
      <div className={styles.rewardTable}>
        <div className={styles.tableHeader}>
          <div>Pet Name</div>
          <div>Health</div>
          <div>Happiness</div>
          <div>Tokens Earned</div>
        </div>
        {pets.map((pet) => (
          <div key={pet.id} className={styles.tableRow}>
            <div>{pet.name}</div>
            <div>{pet.health}%</div>
            <div>{pet.happiness}%</div>
            <div>{pet.tokens}</div>
          </div>
        ))}
      </div>
      <button
        className={`${styles.checkinButton} ${checkedIn ? styles.checkedIn : ""}`}
        onClick={handleCheckin}
      >
        {checkedIn ? "Checked In!" : "Check In"}
      </button>
    </div>
  );
};

export default CheckinComponent;
