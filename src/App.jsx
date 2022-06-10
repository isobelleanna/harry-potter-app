import "./App.scss";
import Button from "./components/Button/Button";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import characters from "./data/characters";

function App() {
  const filteredArr = characters.filter((character) => character.image);
  console.log(filteredArr);
  return (
    <div className="App">
      <h1>Harry Potter App</h1>
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
    </div>
  );
}

export default App;
