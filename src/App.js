import { useState } from "react";
import Logo from "./Logo";
import From from "./From";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAllItems(e) {
    const confirmed = window.confirm("Are you sure you want to delete all items in the packing list?")
    if (confirmed) setItems([]);

  }

  return (
    <div className="app">
      <Logo />
      <From onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
        OnDeleteAllItems={handleDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
export default App;
