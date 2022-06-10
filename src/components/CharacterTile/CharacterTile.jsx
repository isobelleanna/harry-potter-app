import React, { useState } from "react";
import Button from "../Button/Button";
import "./CharacterTile.scss";
import blackCross from "../../assets/images/black-cross.png";

const CharacterTile = (props) => {
  const { characterName, house, ancestry, patronus, actor, wand } = props;
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  };
  const buttonJSX = (
    <div>
      <h2 className="character-tile__name">{characterName}</h2>
      {house ? <h3 className="character-tile__house">{house}</h3> : null}
      <div onClick={handleClick}>
        <Button buttonText="Find Out More" />
      </div>
    </div>
  );
  const textJSX = (
    <div>
      <img
        className="character-tile__cross"
        src={blackCross}
        alt="Black cross"
        onClick={handleClick}
      />
      <h2 className="character-tile__name">{characterName}</h2>
      {ancestry ? (
        <p className="character-tile__content">Ancestry: {ancestry}</p>
      ) : null}
      {patronus ? (
        <p className="character-tile__content">Patronus: {patronus}</p>
      ) : null}
      {actor ? (
        <p className="character-tile__content">Played by: {actor}</p>
      ) : null}
      {wand.wood ? (
        <div className="character-tile__content">
          <p>Wand:</p>
          <ul>
            <li>{wand.wood}</li>
            <li>{wand.core}</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
  return <div className="character-tile">{showText ? textJSX : buttonJSX}</div>;
};

export default CharacterTile;
