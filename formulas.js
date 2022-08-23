// Calcular: perímetro y área de un cuadrado
console.group("Cuadrado");
function calcularCuadrado(lado) {
  return console.log({
    perimetro: lado * 4,
    area: lado * lado,
  });
}

calcularCuadrado(5);
console.groupEnd();

// Calcular: perímetro y área de un triángulo
console.group("Triángulo");
function calcularTriangulo(ladoUno, ladoDos, ladoBase, altura) {
  return console.log({
    perimetro: ladoUno + ladoDos + ladoBase,
    area: (ladoBase * altura) / 2,
  });
}

calcularTriangulo(6, 6, 4, 5.5);
console.groupEnd();

// Calcular: circunferencia y área de un triángulo

console.group("Circulo");

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioCuadrado = Math.pow(radio, 2);

  return console.log({
    circunferencia: diametro * Math.PI,
    area: radioCuadrado * Math.PI,
  });
}

calcularCirculo(3);
console.groupEnd();

// Calcular: altura de un triángulo isósceles
// Fórmula: h = √(a^2 - b^2)/4

console.group("Altura de un triángulo");

function altura(a, b) {
  return console.log({
    altura: Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2) / 4),
  });
}
altura(6, 4);
console.groupEnd();



// Cacular: altura de un triángulo escaleno
// Fórmula: h = √c^2 - ((c^2 - a^2 + b^2) / 2b)^2