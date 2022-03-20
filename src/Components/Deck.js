import React from "react";
import FlashcardHidden from "./FlashcardHidden";
import FlashcardQuestion from "./FlashcardQuestion";
import FlashcardAnswer from "./FlashcardAnswer";

export default function Deck({ callback, deck }) {
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

  const deckDriven = [
    {
      Question: "O melhor tutor da Driven é o(a) __",
      Answer: "Guga!",
    },
    {
      Question: "A melhor turma da Driven é a __",
      Answer: "5",
    },
    {
      Question: "O melhor grupo da T5 é o __",
      Answer: "10",
    },
    {
      Question: "O Pedrão é __",
      Answer: "Incrível",
    },
    {
      Question: "Show de __",
      Answer: "bolinhas",
    },
    {
      Question: "A Driven tem __ de ex-alunos no mercado de trabalho.",
      Answer: "100%",
    },
    {
      Question: "A Driven é a melhor?",
      Answer: "Sim",
    },
    {
      Question: "Diego tem muita __",
      Answer: "paciência",
    },
  ];

  let chosenDeck = [];
  if (deck === "deckReact") {
    chosenDeck = [...deckReact];
  }
  if (deck === "deckDriven") {
    chosenDeck = [...deckDriven];
  }

  chosenDeck.sort(compare);
  function compare() {
    return Math.random() - 0.5;
  }

  return (
    <div className="deck">
      {chosenDeck.map((element, index) => {
        return (
          <RenderFlashcard
            key={index}
            element={element}
            index={index}
            callback={callback}
          />
        );
      })}
    </div>
  );
}

function RenderFlashcard({ element, index, callback }) {
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
      <FlashcardAnswer
        element={element}
        index={index}
        setStage={setStage}
        callback={callback}
      />
    );
  }
}
