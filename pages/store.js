import React from 'react';
import StoreComponent from '../components/StoreComponent';
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";

const StorePage = () => {
  const user = {
    username: 'John Doe',
    tokens: 100,
  };

  return (
    <div>
      <PetMenuComponent />
      <div className={styles.pageLayout}>
        <StoreComponent user={user} />
      </div>
    </div>
  );
};

export default StorePage;
