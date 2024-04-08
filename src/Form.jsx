import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <div className="bg-form">
      <div style={{color:"white"}}>
          <h4>What do you need for your 😍 trip?</h4>
      </div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div>
            <select
            className="form-select"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
        </div>
        <div>
            <input
              type="text"
              placeholder="Item..."
              value={description}
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <button className="btn btn-info" style={{color:"white"}}>Add</button>
        
      </form>
    </div>
  );
}
