const contarLetraA = () => {
    const palabra = prompt("Por favor, ingresa una palabra o frase:");
    let contador = 0;
    
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i].toLowerCase() === 'a') {
        contador++;
      }
    }
  
    alert(`La letra "a" aparece ${contador} veces.`);
  };
  
  // Llamar a la función
  contarLetraA();
  
  