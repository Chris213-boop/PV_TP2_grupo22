/*13. Escribir una función llamada mostrarArreglo que reciba un arreglo numérico como
parámetro e imprima cada elemento en una línea a parte. */
let arregloNumerico = [5,8,15,24,65,56,91];

const mostrarArreglo = (arreglo) =>{
    for(let i = 0; i < arreglo.length; i++){
        console.log(i + 1 + "° elemento del arreglo:",arreglo[i]);
    }
}
mostrarArreglo(arregloNumerico);