import React from "react";
import Header from "./Header";
import Deck from "./Deck";
import Footer from "./Footer";

export default function Deckpage({ chosenDeck }) {
  const [finished, setFinished] = React.useState(0);
  const [icons, setIcons] = React.useState(" ");

  console.log(chosenDeck);
  return (
    <>
      <Header />
      <Deck
        callback={(icon) => {
          setFinished(finished + 1);
          setIcons(`${icons} ${icon}`);
        }}
        chosenDeck={chosenDeck}
      />
      <Footer finished={finished} icons={icons} />
    </>
  );
}
