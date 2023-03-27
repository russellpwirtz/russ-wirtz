import DailyCheckin from "../components/CheckinComponent";
import PetMenuComponent from '../components/PetMenuComponent';

const CheckinPage = () => {
  const user = {
    username: "JohnDoe",
    tokens: 1000,
  };

  const pets = [
    { id: 1, name: "Fluffy", type: "Dog", health: 90, happiness: 80, tokens: 50 },
    { id: 2, name: "Whiskers", type: "Cat", health: 85, happiness: 95, tokens: 60 },
  ];

  return <>
    <PetMenuComponent />
    <DailyCheckin user={user} pets={pets} />
  </>;
};

export default CheckinPage;
