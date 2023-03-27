import React from 'react';
import StoreComponent from '../components/StoreComponent';
import PetMenuComponent from '../components/PetMenuComponent';

const StorePage = () => {
  const user = {
    username: 'JohnDoe',
    tokens: 100,
  };

  return (
    <div>
      <PetMenuComponent />
      <StoreComponent user={user} />
    </div>
  );
};

export default StorePage;
