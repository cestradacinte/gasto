// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchGastos, fetchIngresos } from '../apiService'; // Importa tus funciones API aquí

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    const loadGastosAndIngresos = async () => {
      try {
        const fetchedGastos = await fetchGastos();
        const fetchedIngresos = await fetchIngresos();

        setExpenses(fetchedGastos);
        setIncomes(fetchedIngresos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadGastosAndIngresos();
  }, []);

  return (
    <AppContext.Provider value={{ expenses, setExpenses, incomes, setIncomes }}>
      {children}
    </AppContext.Provider>
  );
}
