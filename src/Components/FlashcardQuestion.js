export default function FlashcardQuestion({ element, index, setStage }) {
  return (
    <div className="question">
      <p>{element.Question}</p>
      <button onClick={() => setStage("answer")}>
        <img src="assets/img/setinha.png" alt="turn" />
      </button>
    </div>
  );
}
