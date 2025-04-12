const verificarPar = () => {

    const input = prompt("Ingresa un número:");

    const numero = Number(input);

    if (isNaN(numero)) {

      alert("Eso no es un número válido.");

    } else {
      if (numero % 2 === 0) {
    alert(`El número ${numero} es par.`);

      } else {

    alert(`El número ${numero} es impar.`);

      }

    }

  }

  verificarPar();