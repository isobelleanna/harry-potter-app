import "./App.scss";
import CharacterCards from "./components/CharacterCards/CharacterCards";
import CharacterTile from "./components/CharacterTile/CharacterTile";
import characters from "./data/characters";
import Nav from "./components/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const filteredArr = characters
    .filter((character) => character.image)
    .slice(0, 5);
  console.log(filteredArr);
  return (
    <div className="App">
      <Nav />
      <section className="character-gallery">
        <h2>Main Characters</h2>
        <CharacterCards filteredArr={filteredArr} />
      </section>
      <SearchBox />
      <div className="character-tiles">
        {characters.map((character, index) => (
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
