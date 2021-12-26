// const p = require('process')

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
})

process.on('exit', () => {
  console.log('El proceso se acabo');
})

process.on('uncaughtExeption', (err, origen) => {
  console.error('Vaya se nos a olvidado capturar un error');
  console.error(err.message);
})

// noExiste()