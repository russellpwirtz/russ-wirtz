import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import PetMenuComponent from '../components/PetMenuComponent';
import { useSession } from "next-auth/react"

const WelcomePage = () => {
  const { data } = useSession()

  let user;
  if (data && data.user) {
    user = {
      username: data.user.name,
      avatar: data.user.image,
      tokens: 120,
    };
  } else {
    user = {}
  }

  return <>
    <PetMenuComponent />
    <WelcomeComponent user={user} />;
  </>
};

export default WelcomePage;
