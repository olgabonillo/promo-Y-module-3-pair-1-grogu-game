import "../scss/App.scss";
import { useState } from "react";


// 1. Grogu en la casilla número 1
// hay 3 galletas, tres huevos y 3 ranas
// El boton del dado = 0

// 2. Escuchamos el evento click del botón dado
// Nos dara un resultado entre 1 y 4 aleatoriamente

// 3. Según el número que salga en el dado grogru se moverá o no

// 4. Si grogru no avanza el usuario puede guaradarse una mercancia 
// (3 galletas, 3 huevos y 3 ranas)
// El usuario puede ver las mercancias restantes.

// 5.Si el usuario a descargado todas las mercancias  gana el juego y sino pierde.

// 6. En el juego nos aseguramos que se muestre la posición  de grogru en las casillas, 
// la mercancia restante  y el resultado del dado.

// 7. Se reiniciar el juego nuevamente, pulsando el botón reiniciar juego.



function App() {

const [position, setPosition] = useState(0);

const [cookies, setCookies] = useState(["cookies"]);

const [eggs, setEggs] = useState(["eggs"]);

const [frogs, setFrogs] = useState(["frogs"]);

const [dice, setDice] = useState(null);

const [state, setState] = useState("En progreso");

  return (
    <>
        <header>
          <h1>¡Cuidado con Grogu!</h1>
        </header>
        <main className="page">
          <section className="board">
            <div className="cell">
              <div className="grogu">👣</div>
            </div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </section>

          <section>
            <button className="dice">Lanzar Dado</button>
            <div className="game-status">En curso</div>
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
