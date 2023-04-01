import React, { useState } from 'react';
import { FaCoins, FaBone, FaFish, FaAppleAlt, FaTshirt } from 'react-icons/fa';
import styles from '../styles/StoreComponent.module.css';

const StoreComponent = ({ user }) => {
  const { tokens } = user;
  const [userTokens, setUserTokens] = useState(tokens);

  const items = [
    {
      id: 1,
      name: 'Bone',
      description: 'A toy bone for your pet to play with.',
      icon: <FaBone />,
      price: 10,
    },
    {
      id: 2,
      name: 'Fish',
      description: 'A delicious fish treat for your pet.',
      icon: <FaFish />,
      price: 15,
    },
    {
      id: 3,
      name: 'Apple',
      description: 'A healthy apple treat for your pet.',
      icon: <FaAppleAlt />,
      price: 5,
    },
    {
      id: 4,
      name: 'T-Shirt',
      description: 'A stylish T-Shirt for your pet to wear.',
      icon: <FaTshirt />,
      price: 20,
    },
  ];

  const handlePurchase = (price) => {
    setUserTokens(userTokens - price);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pet Store</h1>
      <div className={styles.tokens}>
        <FaCoins className={styles.tokenIcon} />
        <span className={styles.tokenCount}>{userTokens}</span>
      </div>
      <div className={styles.items}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.itemIcon}>{item.icon}</div>
            <div className={styles.itemName}>{item.name}</div>
            <div className={styles.itemDescription}>{item.description}</div>
            <button
              className={styles.buyButton}
              onClick={() => handlePurchase(item.price)}
              disabled={userTokens < item.price}
            >
              Buy ({item.price})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreComponent;
