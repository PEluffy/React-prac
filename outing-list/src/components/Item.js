function Item({ item, onDelteItems }) {
  function handleItemDeletion() {
    console.log();
    onDelteItems(item.id);
  }
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={handleItemDeletion}>❌</button>
    </li>
  );
}

export default Item;
