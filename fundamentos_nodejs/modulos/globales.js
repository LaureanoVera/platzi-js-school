console.log(global);
global.miVariable = 'Valor'

console.log(miVariable);

let i = 0

let intervalo = setInterval(function() {
  console.log('Hola');
  if (i === 3) {
    clearInterval(intervalo)
  }
  i++
},2000)

setImmediate(function() {
  console.log('Immediate');
})