import React from "react";
import FlashcardHidden from "./FlashcardHidden";
import FlashcardQuestion from "./FlashcardQuestion";
import FlashcardAnswer from "./FlashcardAnswer";

export default function Flashcard(element, index, option) {
  const [stage, setStage] = React.useState("hidden");
  const [status, setStatus] = React.useState("unanswered");

  if (stage === "hidden") {
    if (status === "unanswered") {
      return (
        <FlashcardHidden
          index={index}
          setStage={setStage}
          option="unanswered"
        />
      );
    }
    if (status === "forgot") {
      return <FlashcardHidden index={index} option="forgot" />;
    }
    if (status === "almost") {
      return <FlashcardHidden index={index} option="almost" />;
    }
    if (status === "zap") {
      return <FlashcardHidden index={index} option="zap" />;
    }
  }

  if (stage === "question") {
    return <FlashcardQuestion element={element} setStage={setStage} />;
  }
  if (stage === "answer") {
    return <FlashcardAnswer element={element} setSatus={setStatus} />;
  }
}
