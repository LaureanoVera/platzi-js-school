const http = require('http')
const PORT = 3000

function router(req, res) {
  console.log('Nueva peticion!');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, como estas?')
      res.end()
      break

    default:
      res.write('Error 404')
      res.end()
  }
  
  res.writeHead(201, {'Content-type':'text/plain'})
  res.write('HTTP de NodeJS')
  res.end()
}

http.createServer(router).listen(PORT)

console.log(`Escuchando http en el puerto ${PORT}`);