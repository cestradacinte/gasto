import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import Dashboard from './components/Dashboard';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleAddIncome = (income) => {
    setIncomes([...incomes, income]);
  }


  return (
    <div className="App">
      <h1>Control de Gastos</h1>
      <ExpenseForm onAdd={handleAddExpense} />
      <IncomeForm onAdd={handleAddIncome} />
      <Dashboard expenses={expenses} incomes={incomes} />
    </div>
  );
}

export default App;
