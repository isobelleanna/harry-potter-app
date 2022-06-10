import React from "react";
import Button from "../Button/Button";
import "./CharacterTile.scss";

const CharacterTile = (props) => {
  const { characterName, house, ancestry, patronus, actor } = props;
  return (
    <div className="character-tile">
      {" "}
      <h2 className="character-tile__name">{characterName}</h2>
      <h3 className="character-tile__house">{house}</h3>
      <Button buttonText="Find Out More" />
      <p className="character-tile__content">Ancestry: {ancestry}</p>
      <p className="character-tile__content">Patronus: {patronus}</p>
      <p className="character-tile__content">Played by: {actor}</p>
    </div>
  );
};

export default CharacterTile;
