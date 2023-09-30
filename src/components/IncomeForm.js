import React, { useState } from "react";
import { createIngreso } from "../apiService";

function IncomeForm({ onAdd }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      monto: amount,
    };

    try {
      const newIngreso = await createIngreso(data);
      onAdd(newIngreso); 
    } catch (error) {
      console.error("Error adding income:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Monto:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Agregar Ingreso</button>
    </form>
  );
}

export default IncomeForm;
