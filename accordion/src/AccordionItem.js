import { useState } from "react";

function AccordionItem({ title, num, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToogle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`acc ${isOpen ? "open" : ""}`} onClick={handleToogle}>
      <span className="num">
        {num >= 0 && num < 10 ? `0${num + 1}` : `${num + 1}`}
      </span>
      <div className="ques-ans">
        <div className="title">{title}</div>
        {isOpen ? <p className="ans">{children}</p> : ""}
      </div>
      <span>{isOpen ? "+" : "-"}</span>
    </div>
  );
}

export default AccordionItem;
