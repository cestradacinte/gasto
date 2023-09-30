
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

    return (
        <div>
            {ingresos.map(ingreso => (
                <div key={ingreso.id}>
                    {ingreso.descripcion}: ${ingreso.monto}
                </div>
            ))}
        </div>
    );
}

export default IncomeList;
