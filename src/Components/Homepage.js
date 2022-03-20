import React from "react";
import logo from "../assets/img/logo.png";

export default function Homepage({ setScreen, setDeck }) {
  return (
    <div className="menu">
      <div className="logo-menu">
        <img src={logo} alt="logoZapRecall"></img>
        <p>ZapRecall</p>
      </div>
      <select name="decks" id="deck-select">
        <option value="" disabled selected>
          Escolha seu deck
        </option>
        <option selected value="deckReact">
          React
        </option>
        <option value="deckDriven">Driven</option>
      </select>
      <button
        onClick={() => {
          setScreen(false);
          setDeck(() => getOption());
        }}
      >
        Iniciar Recall!
      </button>
    </div>
  );
}

function getOption() {
  const selectElement = document.querySelector("#deck-select");
  let output = selectElement.value;
  return output;
}
