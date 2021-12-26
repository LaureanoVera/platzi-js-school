let tabla = [
  { a: 1, b: "z" },
  { a: 2, b: "y" },
  { a: 3, b: "x" },
];

console.log("Algo");
console.error("Error");
console.warn("Advertencia");
console.table(tabla);

console.group('Conversacion')
console.log('Bla bla bla');
console.log('Bla bla bla bla');
console.log('Bla bla');
console.groupEnd('Conversacion')

console.count('numero')
console.count('numero')
console.count('numero')
console.count('numero')
console.countReset('numero')