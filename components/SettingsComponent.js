import React from 'react';
import styles from '../styles/SettingsComponent.module.css';
import { signOut } from 'next-auth/react';

const SettingRow = ({ settingName, description, children }) => (
  <div className={styles.settingRow}>
    <div className={styles.settingInfo}>
      <h3 className={styles.settingName}>{settingName}</h3>
      <p className={styles.settingDescription}>{description}</p>
    </div>
    <div className={styles.settingControl}>{children}</div>
  </div>
);

const SettingsComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      <SettingRow
        settingName="Enable Notifications"
        description="Receive notifications for important events in the game."
      >
        <input type="checkbox" />
      </SettingRow>
      <SettingRow
        settingName="Profile Visibility"
        description="Set your profile to public or private."
      >
        <select>
          <option>Public</option>
          <option>Private</option>
        </select>
      </SettingRow>
      <SettingRow settingName="Logout" description="Logout from your account.">
        <button className={styles.logoutButton} onClick={(e) => {
          e.preventDefault()
          signOut({ callbackUrl: "/welcome" })
        }}>
          Logout
        </button>
      </SettingRow>
    </div>
  );
};

export default SettingsComponent;
