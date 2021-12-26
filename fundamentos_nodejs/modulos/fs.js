const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      cb(err);
    }
    cb('Se ha escrito correctamente');
  })
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb)
}

borrar(__dirname+'/archivo1.txt', console.log)
// escribir(__dirname+'/archivo1.txt', 'Soy un archivo nuevo', console.log)
// leer(__dirname+'/archivo.txt', console.log)