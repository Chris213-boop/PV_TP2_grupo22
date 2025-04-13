/*16. Escribir una función llamada sumarRango que reciba dos argumentos numéricos
enteros: número inicial y número final. La función debe retornar la suma de los números
en ese rango (incluyéndolos).
El número inicial debe ser menor o igual que el número final. */
let suma = 0;
let a;
let b;

const pedirNumero = () => {

    do {
        a = parseFloat(window.prompt("Escribe un numero ENTERO Incial: "));
    } while (isNaN(a));

    do {
        b = parseFloat(window.prompt("Escribe un numero ENTERO Final: "));
    } while (isNaN(b) || b <= a);
    
};

const sumarRango = (x,y) => {
    let i = x;
    for(i; i < y+1; i++){
        suma += i;
    }
    
    console.log("Rango de [",x,"a",y,"]");
    console.log("Suma = ",suma);

    alert("Rango de:  " + x + " a  " + y + " --> Suma = " + suma);
};
pedirNumero();
sumarRango(a,b);