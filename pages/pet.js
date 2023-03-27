
import { useRouter } from 'next/router';
import PetComponent from '../components/PetComponent';
import PetMenuComponent from '../components/PetMenuComponent';

export default function Pet() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <div className="pageLayout">
        <PetMenuComponent />
        {name ? <PetComponent petName={name} /> : <p>Loading...</p>}
      </div>
    </>
  );
};