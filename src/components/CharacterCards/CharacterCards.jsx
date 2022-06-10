import React from "react";
import "./CharacterCards.scss";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterCards = (props) => {
  const { filteredArr } = props;
  return (
    <div className="character-cards">
      {filteredArr.map((character, index) => (
        <CharacterCard
          key={index}
          characterName={character.name}
          characterImg={character.image}
          house={character.house}
          ancestry={character.ancestry}
          patronus={character.patronus}
          actor={character.actor}
        />
      ))}
    </div>
  );
};

export default CharacterCards;
