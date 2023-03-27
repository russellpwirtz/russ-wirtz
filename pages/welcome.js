import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import PetMenuComponent from '../components/PetMenuComponent';

const WelcomePage = () => {
  const user = {
    username: 'JohnDoe',
    avatar: 'https://picsum.photos/id/786/100/100',
    tokens: 120,
    lastCheckin: '2023-03-26T14:30:00.000Z',
  };

  return <>
    <PetMenuComponent />
    <WelcomeComponent user={user} />;
  </>
};

export default WelcomePage;
