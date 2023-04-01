import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/CharacterChooser.module.css";

const pets = [
  {
    name: 'Fluffy',
    img: 'https://www.lifeinnorway.net/wp-content/uploads/2018/08/male-norwegian-forest-cat.jpg',
    id: 2
  },
  {
    name: 'Vanny',
    img: 'https://picsum.photos/id/183/500/500',
    id: 1,
  },
  {
    name: 'Slip n Slide',
    img: 'https://maymont.org/wp-content/uploads/2023/01/banner_otter.jpg.webp',
    id: 3,
  },
  {
    name: 'Joey',
    img: 'https://maymont.org/wp-content/uploads/2020/07/banner-frog.jpg.webp',
    id: 4,
  },
  {
    name: 'Catie',
    img: 'https://news.clas.ufl.edu/wp-content/uploads/sites/4/2020/06/AdobeStock_345118478-copy-1440x961-1-e1613512040649.jpg',
    id: 5,
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
          <Link legacyBehavior href={`/pet?id=${pets[currentIndex].id}`}>
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
