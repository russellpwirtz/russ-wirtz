import React from 'react';
import SettingsComponent from '../components/SettingsComponent';
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";
import useRedirect from '../lib/hooks/useRedirect';
import { useSession } from "next-auth/react"

const StorePage = () => {
  useRedirect(true);
  const { data } = useSession()
  if (!data) {
    return <>
      <div>Please log in</div>
    </>
  }

  return (
    <div>
      <PetMenuComponent />
      <div className={styles.pageLayout}>
        <SettingsComponent user={data.user} />
      </div>
    </div>
  );
};

export default StorePage;
