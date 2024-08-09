import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];
function PackingList({ items, onDelteItems, onTaskComplete }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelteItems={onDelteItems}
            onTaskComplete={onTaskComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
