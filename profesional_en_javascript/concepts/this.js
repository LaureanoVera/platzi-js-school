console.log(`this: ${this}`);

function whoIsThis() {
  // Strict Mode
  "use strict";
  return this;
}
console.log(`Who is this: ${whoIsThis()}`);

// this en el contexto de un objeto
const person = {
  name: 'Laureano',
  saludar: function() {
    console.log(`Hola soy ${this.name}`);
  }
}
console.log(person.saludar());

// this cuando sacamos a una funcion de un objeto
const accion = person.saludar
accion()

// this en el contexto de objeto
function Person (name) {
  // this = {}
  this.name = name
}
Person.prototype.saludar = function () {
  console.log(`Mi nombre es ${this.name}`);
}

const lauri = new Person('Lauri')
lauri.saludar()