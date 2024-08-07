function Question({ ques, selectedId, onSelect }) {
  function handleClick() {
    onSelect(ques.id);
  }
  return (
    <div
      className={`question ${ques.id === selectedId ? "redback" : ""}`}
      onClick={handleClick}
    >
      {ques.id === selectedId ? ques.answer : ques.question}
    </div>
  );
}

export default Question;
