import React from 'react';
import Image from 'next/image';
import styles from '../styles/PetComponent.module.css';
import usePetAction from '../lib/hooks/usePetAction';
import { useState } from 'react';

function getEmoji(value) {
  if (value < 10) {
    return '💔';
  } else if (value >= 10 && value < 70) {
    return '😐';
  } else {
    return '😄';
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
      <h1 className={styles.title}>{petName}</h1>
      <div className={styles.status}>
        <p>Health: {getEmoji(health)}</p>
        <p>Hunger: {getEmoji(hunger)}</p>
        <p>Happiness: {getEmoji(happiness)}</p>
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
          🍲 Feed
        </button>
        <button className={styles.button} onClick={() => setUserAction('Play')}>
          🎾 Play
        </button>
        <button className={styles.button} onClick={() => setUserAction('Sleep')}>
          😴 Sleep
        </button>
      </div>
    </div>
  );
}

export default PetComponent;
