// Importamos la función desde el archivo auxiliar
import { actualizarTexto } from './ejercicio21Auxiliar.js';

const entrada = document.getElementById('textoEntrada');
const salida = document.getElementById('textoSalida');

// Usamos la función importada
entrada.addEventListener('input', () => {
  actualizarTexto(entrada, salida);
});

