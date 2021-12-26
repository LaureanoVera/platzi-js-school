function otraFuncion() {
  seRompe()
}

function seRompe() {
  return 3 + z
}

function seRompeAsincrona(cb) {
  setTimeout(function() {
    try {
      return 3 + z 
    } catch (error) {
      console.error('Error en funcion asincrona');
      cb(error)
    }
  },2000)
}

try {
  // otraFuncion()
  seRompeAsincrona(console.log)
} catch (error) {
  console.error('Vaya, algo se ha roto');
  console.error(`=> ${error.message} <=`)
}