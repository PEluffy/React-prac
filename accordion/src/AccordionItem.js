import { useState } from "react";

function AccordionItem({ title, text, num }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToogle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`acc ${isOpen ? "open" : ""}`} onClick={handleToogle}>
      <span className="num">{num >= 0 ? `0${num + 1}` : `${num + 1}`}</span>
      <div className="ques-ans">
        <div className="title">{title}</div>
        {isOpen ? <p className="ans">{text}</p> : ""}
      </div>
      <span>{isOpen ? "+" : "-"}</span>
    </div>
  );
}

export default AccordionItem;
