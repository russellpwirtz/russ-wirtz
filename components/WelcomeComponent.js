import React from 'react';
import styles from '../styles/WelcomeComponent.module.css';
import { FaCoins, FaPaw } from 'react-icons/fa';
import tree from '../styles/tree.svg';
import bush from '../styles/bush.svg';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const WelcomeComponent = ({ user }) => {
  const { username, avatar, tokens, lastCheckin } = user;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Image src={tree} alt="Biome Element 1" className={`${styles.biomeElement} ${styles.biomeElement1}`} />
      <Image src={bush} alt="Biome Element 2" className={`${styles.biomeElement} ${styles.biomeElement2}`} />
      <div className={styles.header}>
        <div className={styles.header}>
          <h1 className={styles.welcomeMessage}>
            Welcome to <span className={styles.username}>Tarma Pets</span>!
          </h1>
          <div className={styles.userInfo}>
            {avatar && <Image src={avatar} alt="User Avatar" className={styles.avatar} width='20' height='20' />}
            <span className={styles.username}>{username ? username : ""}</span>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.tokens}>
          <FaCoins className={styles.tokenIcon} />
          <span className={styles.tokenCount}>{tokens}</span>
        </div>
      </div>
      <button className={styles.getStartedBtn} onClick={(e) => {
        e.preventDefault()
        username ? router.push('/checkin') : signIn()
      }}>
        Get Started
      </button>
      <div className={styles.petRelated}>
        <FaPaw className={styles.petIcon} />
      </div>
      <a href="/about" className={styles.aboutLink}>About Us</a>
    </div>
  );
};

export default WelcomeComponent;
