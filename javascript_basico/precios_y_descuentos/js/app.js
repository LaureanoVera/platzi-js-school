const precioOriginal = 200;
const descuento = 15;
const calcularConDescuento = (precio, desc) => {
  return precio * ((100 - desc) / 100)
}

const precioFinal = calcularConDescuento(precioOriginal, descuento)
console.log(precioFinal);