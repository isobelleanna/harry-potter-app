import React, { useState } from "react";
import Button from "../Button/Button";
import "./CharacterTile.scss";

const CharacterTile = (props) => {
  const { characterName, house, ancestry, patronus, actor } = props;
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  };
  const buttonJSX = (
    <div>
      {house ? <h3 className="character-tile__house">{house}</h3> : null}
      <div onClick={handleClick}>
        <Button buttonText="Find Out More" />
      </div>
    </div>
  );
  const textJSX = (
    <div>
      {ancestry ? (
        <p className="character-tile__content">Ancestry: {ancestry}</p>
      ) : null}
      {patronus ? (
        <p className="character-tile__content">Patronus: {patronus}</p>
      ) : null}
      {actor ? (
        <p className="character-tile__content">Played by: {actor}</p>
      ) : null}
    </div>
  );
  return (
    <div className="character-tile">
      {" "}
      <h2 className="character-tile__name">{characterName}</h2>
      {showText ? textJSX : buttonJSX}
    </div>
  );
};

export default CharacterTile;
