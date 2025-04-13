const calcularAreaCirculo = (radio) => {
    const PI = Math.PI;
    const area = PI * radio * radio;
    console.log(`El área del círculo con radio ${radio} es: ${area.toFixed(2)}`);
  };
  
  const radio = 7.5;
  calcularAreaCirculo(radio);
  