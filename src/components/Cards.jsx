/** @format */

import React, { Component } from "react";
import style from "../style/Cards.module.css";
import aliveImg from "../img/alive.png";
import deadImg from "../img/dead.png";
import desconocido from "../img/desconocido.png";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoApi: [],
      count: 1,
    };
  }

  async componentDidMount() {
    const api = await fetch(`https://rickandmortyapi.com/api/character?page=1`);
    const characterApi = await api.json();
    this.setState({ ...this.state.infoApi, infoApi: characterApi.results });
  }

  reqApi = async () => {
    const api = await fetch(
      `https://rickandmortyapi.com/api/character?page=${this.state.count}`
    );
    const characterApi = await api.json();
    this.setState({ ...this.state.infoApi, infoApi: characterApi.results });
    this.setState({ count: this.state.count + 1 });
  };

  restarHandler = async () => {
    const api = await fetch(
      `https://rickandmortyapi.com/api/character?page=${this.state.count}`
    );
    const characterApi = await api.json();
    this.setState({ ...this.state.infoApi, infoApi: characterApi.results });
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className={style.nose}>
        <div className={`btn-group ${style.div__button}`}>
          <button
            onClick={(event) => this.restarHandler(event)}
            className={`btn ${style.button}`}>
            «
          </button>
          <button className={`btn ${style.button}`}>{this.state.count}</button>
          <button
            onClick={(event) => this.reqApi(event)}
            className={`btn ${style.button}`}>
            »
          </button>
        </div>
        <div className={style.containerAllCards}>
          {this.state.infoApi.map((element, index) => (
            <div className={style.containerCards} key={index}>
              <div>
                <img
                  src={element.image}
                  alt={element.name}
                  className={style.cards__img}
                />
              </div>
              <div className={style.div__info}>
                {element.status === "Alive" ? (
                  <div className={style.div__img}>
                    <img
                      src={aliveImg}
                      alt='Vivo'
                      className={style.imgAliveOrDead}
                    />
                    <p className={style.pAlive}>
                      {" "}
                      {element.status} - {element.species}
                    </p>
                  </div>
                ) : element.status === "Dead" ? (
                  <div className={style.div__img}>
                    <img
                      src={deadImg}
                      alt='Muerto'
                      className={style.imgAliveOrDead}
                    />
                    <p className={style.pDead}>
                      {" "}
                      {element.status} - {element.species}
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
                      {" "}
                      {element.status} - {element.species}
                    </p>
                  </div>
                )}
                <div className={style.div_name_genero}>
                  <h2 className={style.h2Cards}>
                    <b>{element.name}</b>
                  </h2>
                  <p>({element.gender})</p>
                </div>
                <h3 className={style.h3__pd}>
                  <b>Origen:</b>
                </h3>
                <p className={style.p__pd}>{element.origin.name}</p>
                <h3>
                  <b>Ultima ubicación conocida:</b>
                </h3>
                <p>{element.location.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
