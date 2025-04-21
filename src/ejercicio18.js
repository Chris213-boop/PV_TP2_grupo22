import { cambiarTexto } from './auXiliar18.js';

const boton = document.getElementById('boton');
const parrafo = document.getElementById('parrafo');

boton.addEventListener('click', () => {
  cambiarTexto(parrafo);
});