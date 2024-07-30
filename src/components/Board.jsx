import Grogu from "./Grogu";

const Board = (position) => {
   
  const gameBoxes = new Array(7).fill(null);
  const renderGameBoxes = () => {
    return gameBoxes.map((gameBox, index) => {
      return <div key={index} className="cell"></div>
    })
  }
  return (
    <section className="board">
      {renderGameBoxes({position})}
    </section>
  );
};

export default Board;
