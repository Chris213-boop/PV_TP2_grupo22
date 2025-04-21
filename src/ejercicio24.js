import { obtenerColorAleatorio } from './AuXiliar24.js';

const boton = document.getElementById('btnCambiarFondo');

boton.addEventListener('click', () => {
  const nuevoColor = obtenerColorAleatorio();
  document.body.style.backgroundColor = nuevoColor;
  console.log(`Color cambiado a: ${nuevoColor}`);
});