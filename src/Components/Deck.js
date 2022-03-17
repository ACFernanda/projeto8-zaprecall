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

  return (
    <div className="deck">
      {deckReact.map((elemento, indice) => (
        <div className="flashcard">
          <p>Pergunta {indice + 1}</p>
          <ion-icon name="play-outline"></ion-icon>
        </div>
      ))}
    </div>
  );
}
