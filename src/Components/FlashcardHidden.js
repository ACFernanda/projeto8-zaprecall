import React from "react";

export default function FlashcardHidden({ element, index, setStage, option }) {
  if (option === "unanswered") {
    return (
      <div className="flashcard">
        <p>Pergunta {index + 1}</p>
        <button onClick={() => setStage("question")}>
          <ion-icon name="play-outline"></ion-icon>
        </button>
      </div>
    );
  }
  if (option === "forgot") {
    return (
      <div className="flashcard red">
        <p>Pergunta {index + 1}</p>
        <ion-icon name="close-circle"></ion-icon>
      </div>
    );
  }
  if (option === "almost") {
    return (
      <div className="flashcard yellow">
        <p>Pergunta {index + 1}</p>
        <ion-icon name="help-circle"></ion-icon>
      </div>
    );
  }
  if (option === "zap") {
    return (
      <div className="flashcard green">
        <p>Pergunta {index + 1}</p>
        <ion-icon name="checkmark-circle"></ion-icon>
      </div>
    );
  }
}
