const calcularPromedio = () => {
    const num1 = parseInt(prompt("Ingresa el primer número entero:"));
    const num2 = parseInt(prompt("Ingresa el segundo número entero:"));
    const num3 = parseInt(prompt("Ingresa el tercer número entero:"));

    const promedio = (num1 + num2 + num3) / 3;

    alert(`El promedio de los tres números es: ${promedio.toFixed(2)}`);
};

calcularPromedio();
