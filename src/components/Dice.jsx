function Dice({ onClickDice }) {
  function handleClick() {
    onClickDice ();
  }

  return (
    <button className="dice" onClick={handleClick}>
      Lanzar Dado
    </button>
  );
}
export default Dice;
