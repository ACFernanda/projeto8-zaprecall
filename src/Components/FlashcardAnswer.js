import React from "react";
import FlashcardHidden from "./FlashcardHidden";

export default function FlashcardAnswer({
  element,
  index,
  setStage,
  callback,
}) {
  const [status, setStatus] = React.useState("unanswered");
  if (status === "forgot") {
    return (
      <FlashcardHidden index={index} setStage={setStage} option="forgot" />
    );
  }
  if (status === "almost") {
    return (
      <FlashcardHidden index={index} setStage={setStage} option="almost" />
    );
  }
  if (status === "zap") {
    return <FlashcardHidden index={index} setStage={setStage} option="zap" />;
  }

  return (
    <div className="answer">
      <p>{element.Answer}</p>
      <div className="recall-options">
        <button
          onClick={() => {
            setStatus("forgot");
            callback();
          }}
          className="red"
        >
          Não lembrei
        </button>
        <button
          onClick={() => {
            setStatus("almost");
            callback();
          }}
          className="yellow"
        >
          Quase não lembrei
        </button>
        <button
          onClick={() => {
            setStatus("zap");
            callback();
          }}
          className="green"
        >
          Zap!
        </button>
      </div>
    </div>
  );
}
