import { useState } from "react";

const messages = [
  "Learn React❄️",
  "Apply for jobs👜",
  "Invest your new income🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="container">
      <button className="close " onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`number one ${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`number two ${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`number one ${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              className="btn"
              onClick={() => {
                setStep((pre) => {
                  if (pre === 1) {
                    return pre;
                  } else {
                    return pre - 1;
                  }
                });
              }}
            >
              Previous
            </button>
            <button
              className="btn"
              onClick={() => {
                setStep((pre) => {
                  if (pre === 3) {
                    return pre;
                  } else {
                    return pre + 1;
                  }
                });
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
