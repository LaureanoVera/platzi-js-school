// DEFAULT PARAMS
function newFunction(name, age, country) {
  var name = name || 'Laureano'
  var age = age || 18
  var country = country || 'ARG'
  console.log(name, age, country);
}

newFunction('Ivan', 19)

function newFunction2(name="Laureano", age=18, country="ARG") {
  console.log(name, age, country);
}

newFunction2()
newFunction2('Gerardo', 20,"JP")

// CONCATENACION
let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);

// Multilinea
let lorem = "Esta es una frase epic. Si esa es una frase moooooy epica. \n" + "Como que no? si vos lo dijiste en tu mente."
console.log(lorem);
let lorem2 = `Texto verdaderamente epico en multilinea
igual pero diferente.`
console.log(lorem2);

// DESESTRUCTURACION
let person = {
  "name":"Laureano",
  "age":18,
  "country":"ARG"
}
console.log(person);
let { name } = person
console.log(name);
