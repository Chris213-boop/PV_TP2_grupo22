/*  4. Declarar una variable y almacenar en ella un valor numérico que representa el lado de
un cuadrado. Calcular el área y el perímetro del cuadrado y mostrar los resultados por
consola.
Area = 2 * lado
Perímetro = lado + lado + lado + lado */

const ladoDeCuadrado = 3;

const mostrar = () =>{
    console.log("Area = " , ladoDeCuadrado * 2);
    console.log("Perímetro = " , ladoDeCuadrado * 4);
}

mostrar();