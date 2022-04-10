function hola(nombre, callback) {
  // Funcion asincrona
  setTimeout(function () {
    console.log("Estoy siendo asincrona");
    console.log("Hola", nombre);
    callback();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");

hola("Laureano", function () {
  adios("Laureano", function () {
    setTimeout(function () {
      console.log("Finalizando proceso...");
    }, 500);
  });
});
