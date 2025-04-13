//8.Declarar una función con nombre calcularMayor() y pasarle como parámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de los números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un alert también. Invocar la función y enviar los argumentos con diferentes números para probar.

const calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2){
        alert(numero1 + " es mayor que " + numero2);
    }
    else{
        if (numero2 > numero1){
            alert(numero2 + " es mayor que " + numero1);
        }
        else{
            alert("Ambos números son iguales: " + numero1);
        }
    }
}

//Llamar la funcion y probar valores
calcularMayor(10,5);
calcularMayor(3,7);
calcularMayor(8,8);
