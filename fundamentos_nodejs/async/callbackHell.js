function hola(nombre, miCallback) {
  console.log("Hola, soy una funcion asincrona");
  setTimeout(function () {
    console.log("Hola", nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function() {
      conversacion(nombre,--veces,callback)
    })
  } else {
    adios(nombre, callback)
  }
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1500);
}

// -- -- --
console.log("Iniciando proceso...");
hola('Lauri', function(nombre) {
  conversacion(nombre,3,function() {
    console.log('Proceso terminado...');
  })
})
// hola("Laureano", function (nombre) {
//   hablar(function () {
//     hablar(function() {
//       adios(nombre, function () {
//         console.log("Terminando proceso...");
//       });
//     })
//   });
// });
