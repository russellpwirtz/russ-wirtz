import CharacterChooser from "@/components/CharacterChooser";
import PetMenuComponent from '../components/PetMenuComponent';

export default function Character() {
  return (
    <>
      <div>
        <PetMenuComponent />
        <CharacterChooser />
      </div>
    </>
  );
};