import React from "react";
import { act } from "react-dom/test-utils";
import Button from "../Button/Button";
import "./CharacterTile.scss";

const CharacterTile = (props) => {
  const { characterName, house, ancestry, patronus, actor } = props;
  return (
    <div className="character-tile">
      {" "}
      <h2 className="character-tile__name">{characterName}</h2>
      {house ? <h3 className="character-tile__house">{house}</h3> : null}
      <Button buttonText="Find Out More" />
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
};

export default CharacterTile;
