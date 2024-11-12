function calcularPresupuesto() {
    // Obtener valores de ingresos
    const salario = parseFloat(document.getElementById('salario').value) || 0;
    const otrosIngresos = parseFloat(document.getElementById('otrosIngresos').value) || 0;
    const totalIngresos = salario + otrosIngresos;

    // Obtener valores de gastos
    const vivienda = parseFloat(document.getElementById('vivienda').value) || 0;
    const alimentacion = parseFloat(document.getElementById('alimentacion').value) || 0;
    
    // Gastos de servicios
    const luz = parseFloat(document.getElementById('luz').value) || 0;
    const agua = parseFloat(document.getElementById('agua').value) || 0;
    const internet = parseFloat(document.getElementById('internet').value) || 0;
    
    const transporte = parseFloat(document.getElementById('transporte').value) || 0;
    const educacion = parseFloat(document.getElementById('educacion').value) || 0;
    const salud = parseFloat(document.getElementById('salud').value) || 0;
    const entretenimiento = parseFloat(document.getElementById('entretenimiento').value) || 0;
    const otrosGastos = parseFloat(document.getElementById('otrosGastos').value) || 0;
    
    // Calcular el total de gastos
    const totalGastos = vivienda + alimentacion + luz + agua + internet + transporte + educacion + salud + entretenimiento + otrosGastos;

    // Calcular balance (ingresos - gastos)
    const balance = totalIngresos - totalGastos;

    // Mostrar el resultado
    const resultado = document.getElementById('balance');
    if (balance > 0) {
        resultado.textContent = `Te sobran $${balance.toFixed(2)} este mes.`;
        resultado.style.color = 'green';
    } else if (balance < 0) {
        resultado.textContent = `Te faltan $${Math.abs(balance).toFixed(2)} este mes.`;
        resultado.style.color = 'red';
    } else {
        resultado.textContent = 'Tienes un presupuesto equilibrado este mes.';
        resultado.style.color = 'blue';
    }
}
