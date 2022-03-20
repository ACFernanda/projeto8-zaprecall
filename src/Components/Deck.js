import React from "react";
import FlashcardHidden from "./FlashcardHidden";
import FlashcardQuestion from "./FlashcardQuestion";
import FlashcardAnswer from "./FlashcardAnswer";

export default function Deck({ callback, chosenDeck }) {
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
