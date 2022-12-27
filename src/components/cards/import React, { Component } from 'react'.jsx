import React, { Component } from 'react';
import style from './style/Cards.module.css';
import { connect } from 'react-redux';
import { getCharacters } from '../../redux/actions';
import Card from './Card';

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div className={style.nose}>
        <div className={style.containerAllCards}>
          {[...this.props.myCharacters, ...this.props.characters].map(
            (character, index) => {
              return (
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
              );
            }
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    myCharacters: state.myCharacters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
