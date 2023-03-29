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

function PetComponent({ pet }) {
  const [userAction, setUserAction] = useState(null);
  const { data, error } = usePetAction(userAction);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{pet.petName}</h1>
      <div className={styles.status}>
        <p>Health: {getEmoji(pet.health)}</p>
        <p>Hunger: {getEmoji(pet.hunger)}</p>
        <p>Happiness: {getEmoji(pet.happiness)}</p>
      </div>

      <div className={styles.petImageWrapper}>
        <Image
          src={pet.image}
          alt={pet.petName}
          width={300}
          height={300}
          className={styles.petImage}
        />
      </div>
      <div>
        {pet.name}
      </div>
      <div>
        {pet.type}
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
