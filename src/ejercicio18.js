import { cambiarTexto } from './cambiarTexto18.js';

const boton = document.getElementById('boton');
const parrafo = document.getElementById('parrafo');

boton.addEventListener('click', () => {
  cambiarTexto(parrafo);
});