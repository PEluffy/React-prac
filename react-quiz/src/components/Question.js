import Options from "./Options";
import { useEffect } from "react";

function Question({ question, dispatch, answer }) {
  useEffect(() => {
    document.title = question.question;
    return () => {
      document.title = "Quiz App";
    };
  }, [question]);

  return (
    <div className="options">
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
