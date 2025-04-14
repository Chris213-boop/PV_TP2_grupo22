const retornarMes = () => {
  // Pedir al usuario que ingrese un número
  const n = parseInt(prompt("Ingresa un número del 1 al 12 para obtener el mes:"));

  // Lista de los meses
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  // Obtener el mes correspondiente
  let mes = meses[n - 1];

  // Mostrar el resultado en una ventana emergente (alert)
  alert(mes || "No es un mes válido");
};

// Llamamos a la función
retornarMes();

  