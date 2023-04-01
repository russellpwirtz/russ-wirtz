import React from 'react';
import StoreComponent from '../components/StoreComponent';
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";
import useRedirect from '../lib/hooks/useRedirect';
import { useSession } from "next-auth/react"


const StorePage = () => {
  useRedirect(true);
  const { data } = useSession()
  if (!data) {
    return <>
      <div>Loading...</div>
    </>
  }

  const user = {
    username: data.user.name,
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
