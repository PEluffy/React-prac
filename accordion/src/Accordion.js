import AccordionItem from "./AccordionItem";
import { useState } from "react";

function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="container">
      <div className="acc-cont">
        {faqs.map((faq, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={faq.title}
            num={i}
            key={i}
          >
            {faq.text}
          </AccordionItem>
        ))}
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title="test 1"
          num={22}
          key={"test 1"}
        >
          <p>happy birthday to yo </p>
          <ul>
            <li>happy</li>
            <li>donkey</li>
            <li>money</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
}

export default Accordion;
