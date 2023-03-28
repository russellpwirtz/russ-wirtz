
import { useRouter } from 'next/router';
import PetComponent from '../components/PetComponent';
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";

export default function Pet() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <PetMenuComponent />
      <div className={styles.pageLayout}>
        {name ? <PetComponent petName={name} /> : <p>Loading...</p>}
      </div>
    </>
  );
};