function Item({ item, onDelteItems, onTaskComplete }) {
  function handleItemDeletion() {
    console.log();
    onDelteItems(item.id);
  }
  function handleTaskComplete() {
    onTaskComplete(item.id);
  }
  return (
    <li>
      <input
        type="checkbox"
        onChange={handleTaskComplete}
        value={item.packed}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={handleItemDeletion}>❌</button>
    </li>
  );
}

export default Item;
