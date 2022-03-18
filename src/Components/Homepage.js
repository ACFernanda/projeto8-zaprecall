export default function Homepage({ setScreen }) {
  return (
    <div className="menu">
      <div className="logo-menu">
        <img src="assets/img/logo.png" alt="logoZapRecall"></img>
        <p>ZapRecall</p>
      </div>
      <button onClick={() => setScreen(false)}>Iniciar Recall!</button>
    </div>
  );
}
