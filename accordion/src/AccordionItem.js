function AccordionItem({ title, text, num }) {
  return (
    <div className="acc">
      <span>{num >= 0 ? `0${num + 1}` : `${num + 1}`}</span>
      <div className="ques-ans">
        <div>{title}</div>
        <p>{text}</p>
      </div>
      <span>-</span>
    </div>
  );
}

export default AccordionItem;
