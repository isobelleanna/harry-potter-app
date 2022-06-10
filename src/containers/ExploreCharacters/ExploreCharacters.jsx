import React from "react";
import "./ExploreCharacters.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import CharacterTile from "../../components/CharacterTile/CharacterTile";

const ExploreCharacters = (props) => {
  const { handleInput, searchTerm, filteredBySearch } = props;
  return (
    <div>
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <div className="character-tiles">
        {filteredBySearch.map((character, index) => (
          <CharacterTile
            key={index}
            characterName={character.name}
            house={character.house}
            ancestry={character.ancestry}
            patronus={character.patronus}
            actor={character.actor}
            wand={character.wand}
            species={character.species}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreCharacters;
