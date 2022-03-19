import React from "react";
import FlashcardHidden from "./FlashcardHidden";
import FlashcardQuestion from "./FlashcardQuestion";
import FlashcardAnswer from "./FlashcardAnswer";

function RenderFlashcard({ element, index }) {
  const [stage, setStage] = React.useState("hidden");
  if (stage === "hidden") {
    return (
      <FlashcardHidden index={index} setStage={setStage} option="unanswered" />
    );
  }
  if (stage === "question") {
    return <FlashcardQuestion element={element} setStage={setStage} />;
  }
  if (stage === "answer") {
    return (
      <FlashcardAnswer element={element} index={index} setStage={setStage} />
    );
  }
}

export default function Deck() {
  const deckReact = [
    {
      Question: "O que é JSX?",
      Answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      Question: "O React é __",
      Answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      Question: "Componentes devem iniciar com __",
      Answer: "letra maiúscula",
    },
    {
      Question: "Podemos colocar __ dentro do JSX.",
      Answer: "expressões",
    },
    {
      Question: "O ReactDOM nos ajuda __",
      Answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      Question: "Usamos o npm para __",
      Answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      Question: "Usamos props para __",
      Answer: "passar diferentes informações para componentes",
    },
    {
      Question: "Usamos estado (state) para __?",
      Answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  deckReact.sort(compare);
  function compare() {
    return Math.random() - 0.5;
  }

  return (
    <div className="deck">
      {deckReact.map((element, index) => {
        return <RenderFlashcard key={index} element={element} index={index} />;
      })}
    </div>
  );
}
