import banner from '../img/banner.png';
import style from '../style/Banner.module.css';

const BannerRickAndMorty = () => {
  return (
    <div className={style.banner}>
      <img src={banner} alt='Rick y Morty' className={style.banner} />
    </div>
  );
};
export default BannerRickAndMorty;
