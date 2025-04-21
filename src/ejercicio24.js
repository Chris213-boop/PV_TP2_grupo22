import { obtenerColorAleatorio } from './ejercicio24Auxiliar.js';

const boton = document.getElementById('btnCambiarFondo');

boton.addEventListener('click', () => {
  const nuevoColor = obtenerColorAleatorio();
  document.body.style.backgroundColor = nuevoColor;
  console.log(`Color cambiado a: ${nuevoColor}`);
});