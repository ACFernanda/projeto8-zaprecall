import backArrow from "../assets/img/setinha.png";

export default function FlashcardQuestion({ element, index, setStage }) {
  return (
    <div className="question">
      <p>{element.Question}</p>
      <button onClick={() => setStage("answer")}>
        <img src={backArrow} alt="back-arrow" />
      </button>
    </div>
  );
}
