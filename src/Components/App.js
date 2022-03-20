import React from "react";
import Homepage from "./Homepage";
import Deckpage from "./Deckpage";

export default function App() {
  const [screen, setScreen] = React.useState(true);
  const [deck, setDeck] = React.useState("");

  return (
    <>
      {screen === true ? (
        <Homepage setScreen={setScreen} setDeck={setDeck} />
      ) : (
        <Deckpage deck={deck} />
      )}
    </>
  );
}
