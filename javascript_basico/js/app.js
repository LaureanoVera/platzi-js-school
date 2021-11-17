// CUADRADO
console.group("Cuadrado");

const perimetroCuadrado = (lado) => {
  let res = lado * 4;
  console.log(`El perimetro del cuadrado es: ${res}cm`);
  return res
}
perimetroCuadrado(4)


const areaCuadrado = (lado) => {
  let res = lado * lado
  console.log(`El area del cuadrado es: ${res}cm^2`);
  return res
}
areaCuadrado(4)

console.groupEnd();

// TRIANGULO
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ( lado1, lado2, base) => {
  let res = lado1 + lado2 + base
  console.log(`El perimetro del cuadrado es: ${res}`);
  return res
}
perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)

const areaTriangulo = (base, alto) => {
  let res = (baseTriangulo * alturaTriangulo) / 2
  console.log(`El areadel triangulo es: ${res}cm^2`);
  return res
};
areaTriangulo(baseTriangulo, alturaTriangulo)

console.groupEnd();

// CIRCULO
console.group("Circulo");

const PI = Math.PI

const diametroCirculo = (radio) => {
  let res = radio * 2
  console.log(`El diametro del circulo es: ${res}cm`);
  return res
}

const perimetroCirculo = (radio) => {
  const diametro = diametroCirculo(radio)
  let res = diametro * PI
  console.log(`El perimetro del circulo es: ${res.toFixed(2)}cm`);
  return res
}
perimetroCirculo(4)

const areaCirculo = (radio) => {
  let res = (radio * radio) * PI
  console.log(`El area del circulo es: ${res.toFixed(2)}cm`);
  return res
}
areaCirculo(4)

console.groupEnd();
