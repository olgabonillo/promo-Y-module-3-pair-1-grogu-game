import Grogu from "./Grogu";

const Board = ({ position }) => {
  const gameBoxes = new Array(7).fill(null);
  const renderGameBoxes = () => {
    return gameBoxes.map((gameBox, index) => {
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
