export function obtenerColorAleatorio() {
  const colores = ["#f1c40f", "#e74c3c", "#2ecc71", "#3498db", "#9b59b6", "#1abc9c"];
  const indiceAleatorio = Math.floor(Math.random() * colores.length);
  return colores[indiceAleatorio];
}