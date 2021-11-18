// CUADRADO
const perimetroCuadrado = (lado) => {
  return res = lado * 4;
};
perimetroCuadrado(4);

const areaCuadrado = (lado) => {
  return res = lado * lado;
};
areaCuadrado(4);

// TRIANGULO
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = (lado1, lado2, base) => {
  return res = lado1 + lado2 + base;
};
perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo);

const areaTriangulo = (base, alto) => {
  return res = (baseTriangulo * alturaTriangulo) / 2;
};
areaTriangulo(baseTriangulo, alturaTriangulo);

// CIRCULO
const PI = Math.PI;

const diametroCirculo = (radio) => {
  return res = radio * 2;
};

const perimetroCirculo = (radio) => {
  const diametro = diametroCirculo(radio);
  return res = diametro * PI;
};
perimetroCirculo(4);

const areaCirculo = (radio) => {
  return res = radio * radio * PI;
};
areaCirculo(4);


// INTERACCION CON DOM
const inputCuadrado = document.getElementById("inputCuadrado")
const calcularPerimetroCuadrado = () => {
  const value = inputCuadrado.value
  const perimetro = perimetroCuadrado(value)
  alert(perimetro)
}

const calcularAreaCuadrado = () => {
  const value = inputCuadrado.value
  const area = areaCuadrado(value)
  alert(area)
}