const precioOriginal = 200;
const descuento = 15;

const calcularConDescuento = (precio, desc) => {
  return precio * ((100 - desc) / 100);
};

const mostrarResultado = (precio) => {
  const elementoParrafo = document.getElementById('resultPrice')
  const resultadoTexto = `Precio final con descuento es: $${precio}`
  elementoParrafo.innerText = resultadoTexto
}

const handlePriceDiscount = () => {
  const price = document.getElementById("price").value;
  const discount = document.getElementById("discount").value;
  const precioFinal = calcularConDescuento(price, discount);
  mostrarResultado(precioFinal)
};

