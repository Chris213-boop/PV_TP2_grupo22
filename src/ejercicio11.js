/* Solicitar al usuario que ingrese el número de kilómetros recorridos por su vehículo y el
número de litros de combustible consumidos. Calcular y mostrar el consumo de
combustible por kilómetro.
El resultado se obtiene dividiendo número de litros dividido por número de kilómetros.*/

const pedirNumero = (mensaje) => {
    let numero;

    do {
        numero = parseFloat(window.prompt(mensaje));
    } while (isNaN(numero) || numero <= 0);
    
    return numero;
};

const mostrar = () =>{

    const cantKilometros = pedirNumero("Ingresa el número de kilómetros recorridos por su vehículo: ");

    const cantCombus = pedirNumero("Ingresa el número de litros de combustible consumidos: ");

    const resultado = cantCombus / cantKilometros;

    alert("Consumo de combustible por kilómetro: " + resultado);
    console.log("Consumo de combustible por kilómetro: ", resultado);
}

mostrar();