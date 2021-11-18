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

let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);