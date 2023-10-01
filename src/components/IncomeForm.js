import React, { useState, useContext } from "react";
import { createIngreso } from "../apiService";
import { AppContext } from "./AppContext";

function IncomeForm() {
  const { incomes, setIncomes } = useContext(AppContext);
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      monto: amount,
    };

    try {
      const newIngreso = await createIngreso(data);
      setIncomes([...incomes, newIngreso]);  
    } catch (error) {
      console.error("Error adding income:", error);
    }


    setAmount("");

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
