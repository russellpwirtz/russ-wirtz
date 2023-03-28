import React from 'react';
import SettingsComponent from '../components/SettingsComponent';
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";

const StorePage = () => {
  const user = {
    username: 'JohnDoe',
    tokens: 100,
  };

  return (
    <div>
      <PetMenuComponent />
      <div className={styles.pageLayout}>
        <SettingsComponent user={user} />
      </div>
    </div>
  );
};

export default StorePage;
