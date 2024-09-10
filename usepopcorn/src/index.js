import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  function onSetRating(rating) {
    setMovieRating(rating);
  }
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetRating={onSetRating}
      ></StarRating>
      <div>
        {movieRating
          ? `this movie was rated ${movieRating} starts`
          : `this movie was not rated once`}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={10} defaultRating={3} />
    <StarRating
      size={24}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />
  </React.StrictMode>
);
