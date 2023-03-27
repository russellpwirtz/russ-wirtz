import React from 'react';
import styles from '../styles/WelcomeComponent.module.css';
import { FaCoins, FaPaw } from 'react-icons/fa';
// import Progress from './Progress'; // added Progress component for a progress bar
import tree from '../styles/tree.svg';
import bush from '../styles/bush.svg';
import Image from 'next/image';

const WelcomeComponent = ({ user }) => {
  const { username, avatar, tokens, lastCheckin } = user;

  return (
    <div className={styles.container}>
      <Image src={tree} alt="Biome Element 1" className={`${styles.biomeElement} ${styles.biomeElement1}`} />
      <Image src={bush} alt="Biome Element 2" className={`${styles.biomeElement} ${styles.biomeElement2}`} />
      <div className={styles.header}>
        <h1 className={styles.welcomeMessage}>
          Welcome to <span className={styles.username}>Tarma Pets</span>!
        </h1>
        <div className={styles.userInfo}>
          {avatar && <Image src={avatar} alt="User Avatar" className={styles.avatar} width='20' height='20' />}
          <span className={styles.username}>{username}</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.tokens}>
          <FaCoins className={styles.tokenIcon} />
          <span className={styles.tokenCount}>{tokens}</span>
        </div>
        <div className={styles.lastCheckin}>
          Last check-in: {new Date(lastCheckin).toLocaleString()}
        </div>
        {/* <Progress percentage={50} />  */}
      </div>
      <button className={styles.getStartedBtn}>Get Started</button>
      <div className={styles.petRelated}>
        <FaPaw className={styles.petIcon} />
      </div>
    </div>
  );
};

export default WelcomeComponent;
