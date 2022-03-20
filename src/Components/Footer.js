export default function Footer({ finished, icons }) {
  const arrayColors = icons.split(" ");

  if (finished < 8) {
    return (
      <footer>
        <p>{finished}/8 CONCLUÍDOS</p>
        <AnswersIcons key={finished} arrayColors={arrayColors} />
      </footer>
    );
  }
  if (finished === 8 && arrayColors.includes("red")) {
    return (
      <footer>
        <div class="result">
          <img src="assets/img/sad.png" alt="sad-face" />
          <span>PUTZ!</span>
        </div>
        <p>Ainda faltaram alguns... Mas não desanime!</p>
        <AnswersIcons key={finished} arrayColors={arrayColors} />
      </footer>
    );
  }
  if (finished === 8) {
    return (
      <footer>
        <div class="result">
          <img src="assets/img/party.png" alt="party-face" />
          <span>PARABÉNS!</span>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
        <AnswersIcons key={finished} arrayColors={arrayColors} />
      </footer>
    );
  }
}

function AnswersIcons({ arrayColors }) {
  return (
    <div className="icons">
      {arrayColors.map((color) => {
        if (color === "red") {
          return <ion-icon class="red" name="close-circle"></ion-icon>;
        }
        if (color === "yellow") {
          return <ion-icon class="yellow" name="help-circle"></ion-icon>;
        }
        if (color === "green") {
          return <ion-icon class="green" name="checkmark-circle"></ion-icon>;
        }
      })}
    </div>
  );
}
