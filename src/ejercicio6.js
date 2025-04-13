//6. Crear un array denominado edades con al menos 8 edades distintas. Recorrer el array y obtener el promedio de las edades del array.

let edades = [17, 18, 19, 20, 21, 22, 23, 24, 25];
let suma = 0;

//Creamos la funcion
const sumarEdad = (edad) => {
    suma = suma + edad;
}
//Recorrer el array
for(let i = 0; i < edades.length; i++){
    sumarEdad(edades[i]);
}

console.log("El promedio de las edades es: ", suma / edades.length);