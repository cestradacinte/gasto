
import React from 'react';


function IncomeList({ingresos}) {
  
    function formatDate(isoDate) {
        const date = new Date(isoDate);
        return date.toLocaleDateString();
      }
    return (
        <div>
            {ingresos.map(ingreso => (
                <div key={ingreso.id}>
                    {formatDate(ingreso.fecha)}: $ {ingreso.monto}
                </div>
            ))}
        </div>
    );
}

export default IncomeList;
