import Cards from './cards/Cards';
import style from '../style/RickYMortyCointainer.module.css';
import BannerRickAndMorty from './BannerRickAndMorty';
import FormContainer from './form/FormContainer';

const RickYMortyCointainer = () => {
  return (
    <div className={style.div__container}>
      <div className={style.div__container_bc}>
        <BannerRickAndMorty />
        <FormContainer />
        <Cards />
      </div>
    </div>
  );
};
export default RickYMortyCointainer;
