import React from 'react';
import rickAndMortyImg from './img/rickandmorty.png';
import style from './style/HeaderImg.module.css';

const HeaderImg = () => {
  return (
    <div>
      <img
        src={rickAndMortyImg}
        alt='Rick y Morty'
        className={style.img__rick}
      />
    </div>
  );
};
export default HeaderImg;
