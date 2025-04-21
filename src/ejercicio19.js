import { mostrarDatosUsuario } from './ejercicio19Auxiliar.js';
const inicializarFormulario = () => {
    const mostrarDatosBtn = document.querySelector('#mostrarDatosBtn');

    if (mostrarDatosBtn) {
        mostrarDatosBtn.addEventListener('click', () => {
            mostrarDatosUsuario();
        });
    } else {
        console.error("Error: No se pudo encontrar el botón con ID '#mostrarDatosBtn'.");
        alert("Error: El botón para mostrar datos no está disponible.");
    }
};

inicializarFormulario();
