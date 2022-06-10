import React from "react";
import "./CharacterCard.scss";

const CharacterCard = (props) => {
  const { characterName, characterImg, house, ancestry, patronus, actor } =
    props;
  return (
    <div>
      <h2>{characterName}</h2>
      <img src={characterImg} alt={characterName} />
      <h3>{house}</h3>
      <p>Ancestry: {ancestry}</p>
      <p>Patronus: {patronus}</p>
      <p>Played by: {actor}</p>
    </div>
  );
};

export default CharacterCard;
