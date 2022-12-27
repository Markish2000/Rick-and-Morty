import React from 'react';
import { Link } from 'react-router-dom';
import rickAndMortyImg from './img/rickandmorty.png';
import style from './style/HeaderImg.module.css';

const HeaderImg = () => {
  return (
    <Link to='/'>
      <div>
        <img
          src={rickAndMortyImg}
          alt='Rick y Morty'
          className={style.img__rick}
        />
      </div>
    </Link>
  );
};
export default HeaderImg;
