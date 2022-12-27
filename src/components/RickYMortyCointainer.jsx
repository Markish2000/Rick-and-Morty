import Cards from './cards/Cards';
import BannerRickAndMorty from './BannerRickAndMorty';
import FormCreateCharacter from './createCharacter/FormCreateCharacter';
import FormContainer from './form/FormContainer';
import { useState } from 'react';

const RickYMortyCointainer = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div>
        <BannerRickAndMorty />
        {/* {open && <FormContainer />}
        <FormCreateCharacter /> */}
        <Cards />
      </div>
    </div>
  );
};
export default RickYMortyCointainer;
