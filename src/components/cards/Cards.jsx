import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../redux/actions';
import Card from './Card';
import style from './style/Cards.module.css';

const Cards = () => {
  const cardArray = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div className={style.nose}>
      <div className={style.containerAllCards}>
        {cardArray.characters.map((character, index) => (
          <div key={index}>
            <Card
              name={character.name}
              gender={character.gender}
              status={character.status}
              image={character.image}
              species={character.species}
              origin={character.origin?.name}
              location={character.location?.name}
              id={character.id}
              key={character.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
