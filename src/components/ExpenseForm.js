import React, { useState, useContext } from "react";
import { createGasto } from "../apiService";
import { AppContext } from "./AppContext";

function ExpenseForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const {setExpenses} = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

        const data = {
            descripcion: description,
            monto: amount
        };
        try {
            const newGasto = await createGasto(data);
            setExpenses(prevExpenses => [...prevExpenses, newGasto]);
        } catch (error) {
            console.error("Error adding expense:", error);
        }
        setDescription("");
        setAmount("");

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
