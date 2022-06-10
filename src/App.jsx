import "./App.scss";
import CharacterCards from "./components/CharacterCards/CharacterCards";
import CharacterTile from "./components/CharacterTile/CharacterTile";
import characters from "./data/characters";
import Nav from "./components/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredArr = characters
    .filter((character) => character.image)
    .slice(0, 5);

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };
  const filteredBySearch = characters.filter((character) => {
    const nameLower = character.name.toLowerCase();
    const houseLower = character.house.toLowerCase();
    return nameLower.includes(searchTerm) || houseLower.includes(searchTerm);
  });
  return (
    <div className="App">
      <Nav />
      <section className="character-gallery">
        <h2>Main Characters</h2>
        <CharacterCards filteredArr={filteredArr} />
      </section>
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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
