console.time('all')

let suma = 0
console.time('bucle')
for (let i = 0; i < 1000; i++) {
  suma += 1
}
console.timeEnd('bucle')
console.log(suma);

let suma2 = 0
console.time('bucle2')
for (let i = 0; i < 1000; i++) {
  suma2 += 1
}
console.timeEnd('bucle2')
console.log(suma2);

console.time('asincrono')
console.log('Empieza el proceso asincrono');
asincrona()
  .then(() => {
    console.timeEnd('asincrono')
  })
console.timeEnd('all')

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Se termina el bucle');
      resolve()
    },1000)
  })
}