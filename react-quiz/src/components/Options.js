function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((opt, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""}
           ${
             hasAnswered
               ? index === question.correctOption
                 ? "correct"
                 : "wrong"
               : ""
           }`}
            key={opt}
            disabled={answer !== null}
            onClick={(e) => dispatch({ type: "newAnswer", payload: index })}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
