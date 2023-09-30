import React, { useState } from "react";
import { createGasto } from "../apiService";

function ExpenseForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

        const data = {
            descripcion: description,
            monto: amount
        };

        try {
            const newGasto = await createGasto(data);
            onAdd(newGasto);  
        } catch (error) {
            console.error("Error adding expense:", error);
        }
  };
  return (
    <form onSubmit={handleSubmit} className="ExpenseForm">
      <label>
        Descripcion:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Monto:
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </label>
      <button type="submit">Agregar Gasto</button>
    </form>
  );
}

export default ExpenseForm;
