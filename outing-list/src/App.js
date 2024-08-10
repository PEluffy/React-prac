import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Review from "./components/Review";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function onTaskComplete(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete All");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDelteItems={handleDeleteItems}
        onTaskComplete={onTaskComplete}
        onClearList={handleClearList}
      />
      <Review items={items} />
    </div>
  );
}

export default App;
