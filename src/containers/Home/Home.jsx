import React from "react";
import "./Home.scss";
import CharacterCards from "../../components/CharacterCards/CharacterCards";
import ExploreCharacters from "../ExploreCharacters/ExploreCharacters";

const Home = (props) => {
  const { filteredArr, handleInput, searchTerm, filteredBySearch } = props;
  return (
    <div>
      <section className="character-gallery">
        <h2 className="character-gallery__heading">Main Characters</h2>
        <CharacterCards filteredArr={filteredArr} />
      </section>
      <section>
        <ExploreCharacters
          handleInput={handleInput}
          searchTerm={searchTerm}
          filteredBySearch={filteredBySearch}
        />
      </section>
    </div>
  );
};

export default Home;
