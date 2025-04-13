//5. Declarar dos variables denominadas horas, minutos, asignar valores a cada una y realizar la conversión para expresar esas horas y minutos en segundos. Mostrar por consola las horas y minutos, luego el resultado de la conversión en segundos.

let horas = 5;
let minutos = 45;

// Conversion horas y minutos a segundos usando funciones
const convertirASegundos = (h, m) => (h * 3600) + (m * 60);

// Mostrar
const mostrar = () => {
    const segundos = convertirASegundos(horas, minutos);
    console.log("Horas: ", horas);
    console.log("Minutos: ", minutos);
    console.log("El total en segundos es: ", segundos);
}
mostrar();
