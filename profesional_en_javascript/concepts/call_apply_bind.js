// Estable 'this' usando 'call'
function saludar() {
  console.log(`Hi, I'm ${this.name} ${this.lastName}, I have ${this.age} years old`);
}

const laureano = {
  name:"Laureano",
  lastName: "Vera",
  age: 18
};

saludar.call(laureano)

// Estable 'this' usando 'call' y pasar argumento a la funcion - coma(,)
function walk(cant, time) {
  console.log(`${this.name} walk ${cant}mts in ${time}hs`);
}

walk.call(laureano, 1200, 0.4)

// Estable 'this' usando 'apply' - array([])
const values = [1200, .4] 
walk.apply(laureano, values)

// Estable 'this' en una nueva funcion usando 'bind'
// tuFuncion.bind(contexto, argumento1, argumento2, ...)
const ivan = { name: 'Ivan', lastName:'Vera', age: 19 }
const ivanSaluda = saludar.bind(ivan)
ivanSaluda()

const ivanCamina = walk.bind(ivan)
ivanCamina(25008, 5.21)