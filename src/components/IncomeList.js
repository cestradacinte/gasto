
import React, { useState, useEffect } from 'react';
import { fetchIngresos } from '../apiService';

function IncomeList() {
    const [ingresos, setIngresos] = useState([]);

    useEffect(() => {
        const loadIngresos = async () => {
            try {
                const data = await fetchIngresos();
                setIngresos(data);
            } catch (error) {
                console.error("Error fetching incomes:", error);
            }
        };

        loadIngresos();
    }, []);

    function formatDate(isoDate) {
        const date = new Date(isoDate);
        return date.toLocaleDateString();
      }
    return (
        <div>
            {ingresos.map(ingreso => (
                <div key={ingreso.id}>
                    {formatDate(ingreso.fecha)}: ${ingreso.monto}
                </div>
            ))}
        </div>
    );
}

export default IncomeList;
