import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/CharacterChooser.module.css";

const pets = [
  {
    name: 'Dog',
    img: 'https://picsum.photos/id/237/500/500',
  },
  {
    name: 'Cat',
    img: 'https://picsum.photos/id/40/500/500',
  },
  {
    name: 'Van',
    img: 'https://picsum.photos/id/183/500/500',
  },
  {
    name: 'Deer',
    img: 'https://picsum.photos/id/790/500/500',
  },
];

const CharacterChooser = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + pets.length) % pets.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % pets.length);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pick Your Pet</h1>
      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={handlePrev}>
          &lt;
        </button>
        <div className={styles.contentWrapper}>
          <Link legacyBehavior href={`/pet?name=${pets[currentIndex].name}`}>
            <a className={styles.imageLink}>
              <div className={styles.imageWrapper}>
                <Image
                  src={pets[currentIndex].img}
                  alt={pets[currentIndex].name}
                  layout="fill"
                  objectFit="contain"
                  className={styles.image}
                />
              </div>
            </a>
          </Link>
          <p className={styles.petName}>{pets[currentIndex].name}</p>
        </div>
        <button className={styles.arrow} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CharacterChooser;
