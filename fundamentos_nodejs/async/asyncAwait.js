async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola", nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar() {
  return new Promise((resolve,reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      resolve();
    }, 2000);
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

async function main () {
  let nombre = await hola('Lauri')
  await hablar()
  await hablar()
  await hablar()
  await adios(nombre)
  console.log('Terminamos proceso...');
}
console.log('Empezamos proceso...');
main()