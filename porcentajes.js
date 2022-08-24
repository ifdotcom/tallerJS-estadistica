// precios y descuentos

const price = document.querySelector(".price");
const cuponName = document.querySelector(".discount");
const finalPrice = document.querySelector(".finalPrice");
const calculate = document.querySelector(".calculate");
calculate.addEventListener("click", precioTotal);

function precioTotal(precio, cupon) {
  precio = parseInt(price.value);
  cupon = cuponName.value;

  // validaciones
  if (cupon === "PLATZI20") {
    let descuento = 15;
    let precioFinal;
    precioFinal = (precio * (100 - descuento)) / 100;
    finalPrice.innerText = precioFinal;
  } else if (cupon === "PLATZI50") {
    let descuento = 50;
    precioFinal = (precio * (100 - descuento)) / 100;
    finalPrice.innerText = precioFinal;
  }else{
    finalPrice.innerText = "Cupón inválido";

  }
}
