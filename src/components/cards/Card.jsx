import React from 'react';
import style from './style/Cards.module.css';
import aliveImg from './img/alive.png';
import deadImg from './img/dead.png';
import desconocido from './img/desconocido.png';
import { useDispatch } from 'react-redux';
import { deleteCharacter } from '../../redux/actions';

const Card = ({
  name,
  gender,
  status,
  image,
  species,
  origin,
  location,
  id,
}) => {
  const dispatch = useDispatch();

  const buttonHandleClick = () => {
    dispatch(deleteCharacter(id));
  };

  return (
    <div className={style.containerCards}>
      <div>
        <button onClick={buttonHandleClick}>X</button>
      </div>
      <div>
        <img src={image} alt={name} className={style.cards__img} />
      </div>
      <div className={style.div__info}>
        {status === 'Alive' ? (
          <div className={style.div__img}>
            <img src={aliveImg} alt='Vivo' className={style.imgAliveOrDead} />
            <p className={style.pAlive}>
              {' '}
              {status} - {species}
            </p>
          </div>
        ) : status === 'Dead' ? (
          <div className={style.div__img}>
            <img src={deadImg} alt='Muerto' className={style.imgAliveOrDead} />
            <p className={style.pDead}>
              {' '}
              {status} - {species}
            </p>
          </div>
        ) : (
          <div className={style.div__img}>
            <img
              src={desconocido}
              alt='Desconocido'
              className={style.imgAliveOrDead}
            />
            <p className={style.pDeconocido}>
              {' '}
              {status} - {species}
            </p>
          </div>
        )}
        <div className={style.div_name_genero}>
          <h2 className={style.h2Cards}>
            <b>{name}</b>
          </h2>
          <p>({gender})</p>
        </div>
        <h3 className={style.h3__pd}>
          <b>Origen:</b>
        </h3>
        <p className={style.p__pd}>{origin}</p>
        <h3>
          <b>Ultima ubicación conocida:</b>
        </h3>
        <p>{location}</p>
      </div>
    </div>
  );
};
export default Card;
