import CharacterChooser from "../components/CharacterChooser";
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";

export default function Character() {
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