import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import * as React from "react";
import Form from "./components/Form";
const { useState } = React;

function App() {
  const characters = [];

  const [state, setState] = useState({ characters });

  const removeCharacter = (index) => {
    const { characters } = state;
    setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      }),
    });
  };


  const handleSubmit = characters => setState({characters:[...state.characters,characters]})

  return (
    <div className="container">
      <Table characterData={state.characters} removeCharacter={removeCharacter} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
