import DailyCheckin from "../components/CheckinComponent";
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";
import useRedirect from '../lib/hooks/useRedirect';
import { useSession } from "next-auth/react"

const CheckinPage = (props) => {
  useRedirect(true);
  const { data } = useSession()

  let pets = [
    { id: 1, name: "Fluffy", type: "Dog", health: 90, happiness: 80, tokens: 50 },
    { id: 2, name: "Whiskers", type: "Cat", health: 85, happiness: 95, tokens: 60 },
  ];

  if (!data) {
    return <>
      <div>Please log in</div>
    </>
  }

  return <>
    <PetMenuComponent />
    <div className={styles.pageLayout}>
      <DailyCheckin user={data.user} pets={pets} />
    </div>
  </>;
};

export default CheckinPage;
