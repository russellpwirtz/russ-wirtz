import React from 'react';
import Image from 'next/image';
import styles from '../styles/PetComponent.module.css';
import usePetAction from '../lib/hooks/usePetAction';
import { useState } from 'react';

function getBarColor(value) {
  if (value < 10) {
    return 'red';
  } else if (value >= 10 && value < 70) {
    return 'yellow';
  } else {
    return 'green';
  }
}

function PetComponent({ petName }) {
  const health = 80;
  const hunger = 40;
  const happiness = 70;
  const [userAction, setUserAction] = useState(null);
  const { data, error } = usePetAction(userAction);

  return (
    <div className={styles.container}>
      <div className={styles.indicators}>
        <div className={styles.indicator}>
          <p>Health</p>
          <div className={styles.bar}>
            <div
              className={styles.barInner}
              style={{ width: `${health}%`, backgroundColor: getBarColor(health) }}
            />
          </div>
          <p>{health}%</p>
        </div>
        <div className={styles.indicator}>
          <p>Hunger</p>
          <div className={styles.bar}>
            <div
              className={styles.barInner}
              style={{ width: `${hunger}%`, backgroundColor: getBarColor(hunger) }}
            />
          </div>
          <p>{hunger}%</p>
        </div>
        <div className={styles.indicator}>
          <p>Happiness</p>
          <div className={styles.bar}>
            <div
              className={styles.barInner}
              style={{ width: `${happiness}%`, backgroundColor: getBarColor(happiness) }}
            />
          </div>
          <p>{happiness}%</p>
        </div>
      </div>

      <div className={styles.petImageWrapper}>
        <Image
          src="https://picsum.photos/id/237/500/500"
          alt={petName}
          width={300}
          height={300}
          className={styles.petImage}
        />
      </div>

      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => setUserAction('Feed')}>
          Feed
        </button>
        <button className={styles.button} onClick={() => setUserAction('Play')}>
          Play
        </button>
        <button className={styles.button} onClick={() => setUserAction('Sleep')}>
          Sleep
        </button>
      </div>
    </div >
  );
}

export default PetComponent;
