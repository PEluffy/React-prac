import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setSteps] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="container">
        <div className="stepcontainer">
          <button
            onClick={() => {
              setSteps((s) => {
                return s - 1;
              });
            }}
          >
            -
          </button>
          <span>Step:{step}</span>
          <button
            onClick={() => {
              setSteps((s) => {
                return s + 1;
              });
            }}
          >
            +
          </button>
        </div>
        <div className="countcontainer">
          <button
            onClick={() => {
              setCount((c) => {
                return c - step;
              });
            }}
          >
            -
          </button>
          <span>Count:{count}</span>
          <button
            onClick={() => {
              setCount((c) => {
                return c + step;
              });
            }}
          >
            +
          </button>
        </div>
        {count === 0 ? (
          <span>today is {date.toDateString()}</span>
        ) : (
          <div>
            <span>
              {count < 0 ? `${count * -1} days ago` : `${count} days after`}
            </span>
            <span> today is {date.toDateString()}</span>
          </div>
        )}
      </div>
    </div>
  );
};
