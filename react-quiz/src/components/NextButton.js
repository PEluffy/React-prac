function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        index + 1 !== numQuestions
          ? dispatch({ type: "nextQuestion" })
          : dispatch({ type: "finished" })
      }
    >
      Next
    </button>
  );
}

export default NextButton;
