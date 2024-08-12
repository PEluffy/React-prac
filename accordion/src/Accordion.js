import AccordionItem from "./AccordionItem";

function Accordion({ faqs }) {
  return (
    <div className="container">
      <div className="acc-cont">
        {faqs.map((faq, i) => (
          <AccordionItem title={faq.title} text={faq.text} num={i} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
