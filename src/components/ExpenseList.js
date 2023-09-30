import React, { useState, useEffect } from "react";
import { fetchGastos } from "../apiService";

function ExpenseList() {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const loadGastos = async () => {
      try {
        const data = await fetchGastos();
        setGastos(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    loadGastos();
  }, []);

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString();
  }

  return (
    <div>
      <h4>Listado de Gastos</h4>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map((gasto) => (
            <tr key={gasto.id}>
              <td>{formatDate(gasto.fecha)}</td>
              <td>{gasto.descripcion}</td>
              <td>${gasto.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
