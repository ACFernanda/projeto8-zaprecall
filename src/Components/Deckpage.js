import React from "react";
import Header from "./Header";
import Deck from "./Deck";
import Footer from "./Footer";

export default function Deckpage() {
  const [finished, setFinished] = React.useState(0);
  const [icons, setIcons] = React.useState(" ");

  return (
    <>
      <Header />
      <Deck
        callback={(icon) => {
          setFinished(finished + 1);
          setIcons(`${icons} ${icon}`);
        }}
      />
      <Footer finished={finished} icons={icons} />
    </>
  );
}
