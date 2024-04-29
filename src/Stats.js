export default function Stats({ items }) {
    if (!items.length)
        return <p className="stats">Start adding some item to packing list 🚀</p>;

    const numItem = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItem) * 100);
    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You got everything! Read to go ✈️"
                    : `💼 You have ${numItem}item on your list, and you already packed ${numPacked} (${percentage}%)
        `}
            </em>
        </footer>
    );
}
