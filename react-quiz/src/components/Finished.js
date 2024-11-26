function Finished({ points, totalPoints, highscore, dispatch }) {
  let emoji;
  const percentage = (points / totalPoints) * 100;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage < 80) emoji = "🥉";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}%).
      </p>
      <p className="highscore">(HighScore:{highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "playAgain" })}
      >
        Play Again!
      </button>
    </>
  );
}

export default Finished;
