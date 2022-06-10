import "./App.scss";
import CharacterCards from "./components/CharacterCards/CharacterCards";
import characters from "./data/characters";
import Nav from "./components/Nav/Nav";
import ExploreCharacters from "./containers/ExploreCharacters/ExploreCharacters";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredArr = characters
    .filter((character) => character.image)
    .slice(0, 3);

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
}

export default App;
