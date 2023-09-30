import React from "react";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList";
import Ganancia from "./Ganancia";

function Dashboard() {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>

            <div className="dashboard-content">
                
                <div className="income-section">
                    <h3>Ingresos</h3>
                    <IncomeList />  {/* Usa el componente aquí */}
                </div>
                <div className="expenses-section">
                    <h3>Gastos</h3>
                    <ExpenseList />
                </div>
                <div className="ganancia-section">
                    <h3>Ganancia</h3>
                    <Ganancia />
                </div>
                
                {/* Puedes añadir más secciones o componentes según lo necesites */}
                
            </div>
        </div>
    );
}

export default Dashboard;