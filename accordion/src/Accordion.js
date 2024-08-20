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
      </div>
    </div>
  );
}

export default Accordion;
