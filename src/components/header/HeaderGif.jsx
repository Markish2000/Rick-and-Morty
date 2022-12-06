import React from 'react';
import gifHeader from './img/gifBanner.gif';
import style from './style/HeaderGif.module.css';

const HeaderGif = () => {
  return (
    <div>
      <img src={gifHeader} alt='Rick y Morty' className={style.gif} />
    </div>
  );
};
export default HeaderGif;
