const nombres = ["Pedro", "Maximiliano", "Pablo", "Ana", "Cintia"];

console.log("De los nombres Pedro, Maximiliano, Pablo, Ana y Cintia");
const obtenerNombreMasLargo = (lista) => {
  let nombreMasLargo = "";
  for (const nombre of lista) {
    if (nombre.length > nombreMasLargo.length) {
      nombreMasLargo = nombre;
    }
  }
  return nombreMasLargo;
};
const nombreLargo = obtenerNombreMasLargo(nombres);
console.log(`El nombre más largo es: ${nombreLargo}`);