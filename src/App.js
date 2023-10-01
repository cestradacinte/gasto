// App.js

import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import { AppProvider } from './components/AppContext';   // Importamos AppProvider
import IncomeForm from './components/IncomeForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>Control de Gastos</h1>
        <ExpenseForm />
        <IncomeForm />
        <Dashboard />
      </div>
    </AppProvider>
  );
}

export default App;
