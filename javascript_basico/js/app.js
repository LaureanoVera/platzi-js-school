// CUADRADO
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`);

console.groupEnd();

// TRIANGULO
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(`Los lados del triangulo miden:
${ladoTriangulo1}cm
${ladoTriangulo2}cm
${baseTriangulo}cm
`);

const alturaTriangulo = 5.5;
console.log(`La altura del triangulo es de: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del cuadrado es: ${perimetroTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log(`El areadel triangulo es: ${areaTriangulo}cm^2`);

console.groupEnd();

// CIRCULO
