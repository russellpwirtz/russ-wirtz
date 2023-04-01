import CharacterChooser from "../components/CharacterChooser";
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";
import useRedirect from '../lib/hooks/useRedirect';

export default function Character() {
  useRedirect(true);

  return (
    <>
      <div>
        <PetMenuComponent />
        <div className={styles.pageLayout}>
          <CharacterChooser />
        </div>
      </div>
    </>
  );
};