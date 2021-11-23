// Closures

// IIFE
(function() {
  let color = 'green'

  function printColor(color) {
    console.log(color);
  }

  printColor(color)
})()

// Funciones que regresan funciones
function makeColorPrinter(color) {
  let colorMsg = `The color is ${color}`

  return function() {
    console.log(colorMsg);
  }
}

let colorPrinter = makeColorPrinter('red')
console.log(colorPrinter);
console.log(colorPrinter());

// Variables Privadas
// const counter = {
//   count: 3
// }
// console.log(counter.count);

function makeCounter(n) {
  let count = n

  return {
    increase: function() {
      count = count+1
    },
    decrease: function() {
      count = count-1
    },
    getCount: function() {
      return count
    }
  }
}

let counter = makeCounter(18)
counter.decrease()
counter.decrease()
counter.decrease()
console.log(counter.getCount());
counter.increase()
counter.increase()
console.log(counter.getCount());