import React from "react";
import Header from "./Header";
import Deck from "./Deck";
import Footer from "./Footer";

export default function Deckpage() {
  const [total, setTotal] = React.useState(0);

  return (
    <>
      <Header />
      <Deck callback={() => setTotal(total + 1)} />
      <Footer total={total} />
    </>
  );
}
