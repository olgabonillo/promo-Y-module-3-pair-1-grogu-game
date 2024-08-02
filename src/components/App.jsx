import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Board from "./Board";
import Grogu from "./Grogu";
import Dice from "./Dice";
import Form from "./Form";

// 1. Grogu en la casilla número 1
// hay 3 galletas, tres huevos y 3 ranas
// El boton del dado = 0

// 2. Escuchamos el evento click del botón dado
// Nos dara un resultado entre 1 y 4 aleatoriamente

// 3. Según el número que salga en el dado grogru se moverá o no

// 4. Si grogu no avanza el usuario puede guaradarse una mercancia
// (3 galletas, 3 huevos y 3 ranas)
// El usuario puede ver las mercancias restantes.

// 5.Si el usuario ha descargado todas las mercancias  gana el juego y sino pierde.

// 6. En el juego nos aseguramos que se muestre la posición  de grogu en las casillas,
// la mercancia restante  y el resultado del dado.

// 7. Se reiniciar el juego nuevamente, pulsando el botón reiniciar juego.

function App() {
  const [positionGrogu, setPositionGrogu] = useState(0);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  const [dice, setDice] = useState(null);
  const [stateGame, setStateGame] = useState("En progreso");
  const [name, setName] = useState("");

  useEffect(() => {
    if (positionGrogu === 7) {
      setStateGame("Grogu se ha comido todo el cargamento, has perdido ");
    } else if (
      cookies.length === 0 &&
      eggs.length === 0 &&
      frogs.length === 0
    ) {
      setStateGame("Has ganado, has conseguido ganar la misión");
    }
    [positionGrogu, cookies, eggs, frogs];
  });

  const changeName = (inputValue) => {
    setName(inputValue);
  };

  function handleClickRollDice() {
    const result = Math.floor(Math.random() * 4) + 1;
    setDice(result);

    if (result === 4) {
      setPositionGrogu(positionGrogu + 1);
      setStateGame("Grogu ha avanzado una casilla");
    }
    if (result === 3) {
      setCookies(cookies.slice(0, -1));
      setStateGame("Ha descargado una galleta");
    }
    if (result === 2) {
      setEggs(eggs.slice(0, -1));
      setStateGame("Ha descargado un huevo");
    }
    if (result === 1) {
      setFrogs(frogs.slice(0, -1));
      setStateGame("Ha descargado una rana");
    }
  }

  return (
    <>
      <Header name={name} />
      <Form name={name} onChangeName={changeName} />
      <main className="page">
        <Board position={positionGrogu} />
        <section>
          <Dice onClickDice={handleClickRollDice} />
          <div className="game-status">{stateGame}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
