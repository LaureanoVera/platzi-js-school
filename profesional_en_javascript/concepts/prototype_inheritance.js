function Hero(name) {
  this.name = name
}

Hero.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
}

const zelda = new Hero('Zelda')

// Propiedades de la instancia
console.log(`Name: ${zelda.name}`);
// Propiedades de la clase
console.log(`Greet: ${zelda.greet}`);
// Propiedades heredadas
console.log(`toString: ${zelda.toString}`);
// hasOwnProperty (de donde sale toString o esto)
console.log(`zelda.hasOwnProperty('name'): ${zelda.hasOwnProperty('name')}`);
console.log(`zelda.hasOwnProperty('greet'): ${zelda.hasOwnProperty('greet')}`);
