
import { useRouter } from 'next/router';
import PetComponent from '../components/PetComponent';
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";
import useRedirect from '../lib/hooks/useRedirect';

export default function Pet() {
  useRedirect(true);

  const router = useRouter();
  const { id } = router.query;

  let pet = {};
  if (id === '1') {
    pet = {
      id: 1,
      name: "Vanny",
      type: "Van",
      health: 90,
      happiness: 80,
      hunger: 4,
      image: 'https://picsum.photos/id/183/500/500'
    };
  } else if (id === '2') {
    pet = {
      id: 2,
      name: "Fluffy",
      type: "Cat",
      health: 10,
      happiness: 32,
      hunger: 44,
      image: 'https://www.lifeinnorway.net/wp-content/uploads/2018/08/male-norwegian-forest-cat.jpg'
    }
  } else if (id === '3') {
    pet = {
      id: 2,
      name: "Slip n Slide",
      type: "Otter",
      health: 75,
      happiness: 99,
      hunger: 88,
      image: 'https://maymont.org/wp-content/uploads/2023/01/banner_otter.jpg.webp'
    }
  } else if (id === '4') {
    pet = {
      id: 2,
      name: "Joey",
      type: "Frog",
      health: 75,
      happiness: 99,
      hunger: 1,
      image: 'https://maymont.org/wp-content/uploads/2020/07/banner-frog.jpg.webp'
    }
  } else if (id === '5') {
    pet = {
      id: 2,
      name: "Catie",
      type: "Guinea Pig",
      health: 33,
      happiness: 99,
      hunger: 99,
      image: 'https://news.clas.ufl.edu/wp-content/uploads/sites/4/2020/06/AdobeStock_345118478-copy-1440x961-1-e1613512040649.jpg'
    }
  };

  return (
    <>
      <PetMenuComponent />
      <div className={styles.pageLayout}>
        {pet.name ? <PetComponent pet={pet} /> : <p>Loading...</p>}
      </div>
    </>
  );
};