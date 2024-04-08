export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        className="input-item"
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button className="X" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
