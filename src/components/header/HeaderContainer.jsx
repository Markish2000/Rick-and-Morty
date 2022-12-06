import style from './style/Header.module.css';
import HeaderImg from './HeaderImg';
import HeaderGif from './HeaderGif';

const HeaderContainer = () => {
  return (
    <div className={style.div}>
      <HeaderImg />
      <HeaderGif />
    </div>
  );
};
export default HeaderContainer;
