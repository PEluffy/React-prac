import { useState } from "react";
import Question from "./Question";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 3458,
    question: "What hook is used for state management in React?",
    answer: "useState",
  },
  {
    id: 3459,
    question:
      "Which JavaScript framework is often used with React for routing?",
    answer: "ReactRouter",
  },
  {
    id: 3460,
    question: "Which function keyword was introduced in ES6?",
    answer: "Arrow",
  },
  {
    id: 3461,
    question: "What method is used to convert JSON to a JavaScript object?",
    answer: "parse",
  },
  {
    id: 3462,
    question:
      "Which lifecycle method is used to fetch data in a class component?",
    answer: "componentDidMount",
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const handleSelect = (id) => {
    if (id === selectedId) {
      return setSelectedId(null);
    }
    return setSelectedId(id);
  };
  return (
    <div className="App">
      {questions.map((ques) => (
        <Question
          ques={ques}
          key={ques.id}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

export default App;
