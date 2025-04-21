import { cambiarTexto } from './ejercicio18Auxiliar.js';

const boton = document.getElementById('boton');
const parrafo = document.getElementById('parrafo');

boton.addEventListener('click', () => {
  cambiarTexto(parrafo);
});