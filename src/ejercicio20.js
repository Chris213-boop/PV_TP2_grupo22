// Construir una página utilizando Html, Css y JavaScript que contenga dos listas desplegables (<select>): La primera lista debe contener una selección de países de América. La segunda lista debe contener las capitales correspondientes a esos países. Al seleccionar un país en la primera lista, la capital correspondiente debe seleccionarse automáticamente en la segunda lista, usando JavaScript. El comportamiento debe implementarse con JavaScript utilizando el evento change. Incluir al menos 6 países y sus capitales. Mostrar un mensaje en consola indicando qué país y capital están seleccionados.

import { paisesCapitales } from "./ejercicio20Auxiliar.js";
const selectPaises = document.getElementById("paises");
const selectCapitales =document.getElementById("capitales");

Object.keys(paisesCapitales).forEach(pais => {
    const option = document.createElement("option");
    option.value = pais;
    option.textContent = pais;
    selectPaises.appendChild(option);
});

Object.values(paisesCapitales).forEach(capital => {
    const option = document.createElement("option");
    option.value = capital;
    option.textContent = capital;
    selectCapitales.appendChild(option);
});


selectPaises.addEventListener("change", () => {
    const pais = selectPaises.value;
    const capital = paisesCapitales[pais];

    if (capital) {
        selectCapitales.value = capital;
        console.log(`País seleccionado: ${pais}, Capital correspondiente: ${capital}`);
    } else{
        selectCapitales.value = "";
    }
});

