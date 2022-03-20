import React from "react";
import FlashcardHidden from "./FlashcardHidden";
import FlashcardQuestion from "./FlashcardQuestion";
import FlashcardAnswer from "./FlashcardAnswer";

export default function RenderFlashcard(element, index) {
  const [stage, setStage] = React.useState("hidden");
  if (stage === "hidden") {
    return <FlashcardHidden index={index} setStage={setStage} />;
  }
  if (stage === "question") {
    return <FlashcardQuestion element={element} setStage={setStage} />;
  }
  if (stage === "answer") {
    return <FlashcardAnswer element={element} setStage={setStage} />;
  }
}
