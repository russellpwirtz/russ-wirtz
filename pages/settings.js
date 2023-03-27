import React from 'react';
import SettingsComponent from '../components/SettingsComponent';
import PetMenuComponent from '../components/PetMenuComponent';

const StorePage = () => {
  const user = {
    username: 'JohnDoe',
    tokens: 100,
  };

  return (
    <div>
      <PetMenuComponent />
      <SettingsComponent user={user} />
    </div>
  );
};

export default StorePage;
