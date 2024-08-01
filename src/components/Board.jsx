import Grogu from "./Grogu";

const Board = ({ position }) => {
  const gameBoxes = new Array(7).fill(null);
  console.log("position", position);
  const renderGameBoxes = () => {
    return gameBoxes.map((gameBox, index) => {
      console.log("index", index);
      return (
        <div key={index} className="cell">
          {position === index ? <Grogu /> : null}
        </div>
      );
    });
  };
  return <section className="board">{renderGameBoxes()}</section>;
};

export default Board;
