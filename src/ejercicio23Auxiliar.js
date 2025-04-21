// Función para actualizar el contenido en el DOM y en la consola
export const actualizarSeleccion = () => {
    const seleccionado = document.querySelector('input[name="lenguajes"]:checked');

    if (seleccionado) {
        document.getElementById('mostrar').innerText = `Opción seleccionada: ${seleccionado.value}`;
        
        console.log(`Opción seleccionada: ${seleccionado.value}`);
    }
};