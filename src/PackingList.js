import Item from "./Item";

export default function PackingList({ items, onDeleteItems, onToggleItem, OnDeleteAllItems }) {



    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        item={item}
                        onDeleteItems={onDeleteItems}
                        onToggleItem={onToggleItem}
                        key={item.id} />
                ))}
            </ul>

            <button onClick={OnDeleteAllItems}>Crear list </button>
        </div>
    );
}
