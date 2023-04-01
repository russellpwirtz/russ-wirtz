import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaDog, FaStoreAlt, FaCog, FaHome } from 'react-icons/fa';
import styles from '../styles/PetMenuComponent.module.css';

const PetMenuComponent = () => {
  return (
    <div className={styles.container}>
      <Link legacyBehavior href="/welcome">
        <a>
          <FaHome className={styles.icon} />
        </a>
      </Link>
      <Link legacyBehavior href="/checkin">
        <a>
          <FaCheckCircle className={styles.icon} />
        </a>
      </Link>
      <Link legacyBehavior href="/character">
        <a>
          <FaDog className={styles.icon} />
        </a>
      </Link>
      <Link legacyBehavior href="/store">
        <a>
          <FaStoreAlt className={styles.icon} />
        </a>
      </Link>
      <Link legacyBehavior href="/settings">
        <a>
          <FaCog className={styles.icon} />
        </a>
      </Link>
    </div>
  );
};

export default PetMenuComponent;