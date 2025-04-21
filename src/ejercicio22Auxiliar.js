
export const actualizarTexto = (entrada, salida) => {
    entrada.addEventListener("input", () => {
        const texto = entrada.value;
        salida.textContent = texto;

        if (texto.length > 20) {
            salida.classList.add("texto-largo");
        } 
        else {
        salida.classList.remove("texto-largo");
        }
    });
};