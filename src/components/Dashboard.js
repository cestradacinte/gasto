import React, { useContext } from "react";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList";
import Ganancia from "./Ganancia";
import { AppContext } from "./AppContext";

function Dashboard() {
    const { incomes } = useContext(AppContext);
    const { expenses } = useContext(AppContext);

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>

            <div className="dashboard-content">
                
                <div className="income-section">
                    <h3>Ingresos</h3>
                    <IncomeList ingresos={incomes}/>  
                </div>
                <div className="expenses-section">
                    <h3>Gastos</h3>
                    <ExpenseList gastos={expenses} />
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