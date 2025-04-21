/** @returns {object|null} */
const obtenerDatosFormulario = () => {
    const nombreInput = document.querySelector('#nombreInput');
    const apellidoInput = document.querySelector('#apellidoInput');
    const libretaInput = document.querySelector('#libretaInput');
    if (!nombreInput || !apellidoInput || !libretaInput) {
        console.error("Error: No se encontraron todos los campos del formulario (IDs: #nombreInput, #apellidoInput, #libretaInput).");
        alert("Error interno al buscar los campos del formulario.");
        return null;
    }

    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const libreta = libretaInput.value.trim();

    if (nombre === '' || apellido === '' || libreta === '') {
        alert('Por favor, completa todos los campos.');
        return null;
    }

    return { nombre, apellido, libreta };
};

export const mostrarDatosUsuario = () => {
    const datos = obtenerDatosFormulario();

    if (!datos) {
        return;
    }

    const mensaje = `Los datos ingresados son:\nNombre: ${datos.nombre}\nApellido: ${datos.apellido}\nLibreta Universitaria: ${datos.libreta}`;

    alert(mensaje);
};
