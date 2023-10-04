// /src/components/Ganancia.js

import React, { useState, useEffect } from 'react';
import { fetchGastos, fetchIngresos } from '../apiService';

function Ganancia() {
    const [gastos, setGastos] = useState([]);
    const [ingresos, setIngresos] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const gastosData = await fetchGastos();
                const ingresosData = await fetchIngresos();
                setGastos(gastosData);
                setIngresos(ingresosData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        loadData();
    }, []);
   
    const totalGastos = gastos.reduce((acc, gasto) => acc + parseInt(gasto.monto), 0);
    const totalIngresos = ingresos.reduce((acc, ingreso) => acc + parseInt(ingreso.monto), 0);
    const ganancia = parseInt(totalIngresos) - parseInt(totalGastos);
    console.log(typeof ganancia)
    return (
        <div>
            <h4>Relación de Ganancias</h4>
            <p>Ingresos Totales: <span className="texto_azul" > ${totalIngresos}</span></p>
            <p>Gastos Totales: <span className="texto_rojo">${totalGastos}</span></p>
            <p>Ganancia Neta: <span className='texto_verde'>${ganancia}</span></p>
        </div>
    );
}

export default Ganancia;
