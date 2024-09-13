import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
import TextExpander from "./TextExpander";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  function onSetRating(rating) {
    setMovieRating(rating);
  }
  return (
    <div>
      {" "}
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
    <TextExpander>
      Dolore do est enim dolore laboris duis. Aliqua proident incididunt duis
      labore culpa magna labore ea fugiat non. Non exercitation ea proident
      culpa eu labore nisi eiusmod nulla do consectetur. Cupidatat velit sit
      officia aute Lorem sit eu occaecat do minim. Et sint excepteur non dolor.
    </TextExpander>
    <TextExpander
      maxLength={150}
      collapseButtonText={"Collapse"}
      expandButtonText={"Expand"}
    >
      Qui quis amet nulla quis labore exercitation incididunt cupidatat aliquip.
      In commodo occaecat aliqua sint exercitation dolore voluptate qui proident
      est culpa cillum consequat. Anim voluptate laboris deserunt sint Lorem
      quis qui. Irure et esse aute do exercitation eiusmod laboris voluptate
      commodo ut ea ad ipsum adipisicing. Proident aliquip proident elit Lorem
      cupidatat. Anim cillum officia officia occaecat do consectetur
      exercitation.
    </TextExpander>
  </React.StrictMode>
);
/* <StarRating maxRating={10} defaultRating={3} />
    <StarRating
      size={24}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />*/
