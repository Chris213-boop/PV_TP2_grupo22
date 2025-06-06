/*22. Construir una página web utilizando Html, Css y JavaScript que permita al usuario
escribir en un campo de texto (<input>). A medida que el usuario escribe, el contenido
debe mostrarse en otro elemento de la página (como un <p> o un <div>).
Además, cuando el texto supere los 20 caracteres, el fondo del elemento donde se
muestra el texto debe cambiar de color automáticamente.
Usar un <input type="text"> para que el usuario pueda escribir.
Mostrar el texto ingresado en tiempo real dentro de un <p> o <div>.
Aplicar estilos básicos con CSS.
Utilizar JavaScript para manejar el evento input.*/

import { actualizarTexto } from "./ejercicio22Auxiliar.js";

const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");

actualizarTexto(entrada, salida);