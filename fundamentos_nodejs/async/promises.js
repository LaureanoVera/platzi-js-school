function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola", nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar() {
  return new Promise((resolve,reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      resolve();
    }, 1000);
  })
}

function adios(nombre) {
  return new Promise((resolve,reject) => {
    setTimeout(function () {
      console.log("Adios", nombre);
      resolve();
    }, 1500);
  })
}

hola('Lauri')
  .then(hablar)
  .then(hablar)
  .then(adios)
  .catch(error => console.error(error))
