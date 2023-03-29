import DailyCheckin from "../components/CheckinComponent";
import PetMenuComponent from '../components/PetMenuComponent';
import styles from "../styles/PetPageLayout.module.css";
import useRedirect from '../lib/hooks/useRedirect';

const CheckinPage = (props) => {
  useRedirect(props, true);

  const user = {
    username: props.user.name,
    tokens: 1000,
  };

  const pets = [
    { id: 1, name: "Fluffy", type: "Dog", health: 90, happiness: 80, tokens: 50 },
    { id: 2, name: "Whiskers", type: "Cat", health: 85, happiness: 95, tokens: 60 },
  ];

  return <>
    <PetMenuComponent />
    <div className={styles.pageLayout}>
      <DailyCheckin user={user} pets={pets} />
    </div>
  </>;
};

export default CheckinPage;