import style from './style/Header.module.css';
import HeaderImg from './HeaderImg';
import HeaderGif from './HeaderGif';

const HeaderContainer = () => {
  return (
    <header className={style.div}>
      <HeaderImg />
      <HeaderGif />
    </header>
  );
};
export default HeaderContainer;
