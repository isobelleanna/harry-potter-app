import React from "react";
import "./CharacterCard.scss";

const CharacterCard = (props) => {
  const { characterName, characterImg, house, ancestry, patronus } = props;
  return (
    <div className="character-card">
      <h2 className="character-card__name">{characterName}</h2>
      <img
        className="character-card__img"
        src={characterImg}
        alt={characterName}
      />
      <h3 className="character-card__house">{house}</h3>
      <p className="character-card__content">Ancestry: {ancestry}</p>
      <p className="character-card__content">Patronus: {patronus}</p>
    </div>
  );
};

export default CharacterCard;
