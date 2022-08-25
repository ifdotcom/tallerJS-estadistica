// precios y descuentos

const price = document.querySelector(".price");
const cuponName = document.querySelector(".discount");
const finalPrice = document.querySelector(".finalPrice");
const calculate = document.querySelector(".calculate");
calculate.addEventListener("click", precioTotal);

// function precioTotal(precio, cupon) {
//   precio = parseInt(price.value);
//   cupon = cuponName.value;
//   if (cupon === "PLATZI20") {
//     let descuento = 15;
//     let precioFinal;
//     precioFinal = (precio * (100 - descuento)) / 100;
//         finalPrice.innerText = `Usted tiene el 20% de descuento, precio final: $${precioFinal}`;

//   } else if (cupon === "PLATZI50") {
//     let descuento = 50;
//     precioFinal = (precio * (100 - descuento)) / 100;
//     finalPrice.innerText = `Usted tiene el 50% de descuento, precio final: $${precioFinal}`;
//   }else{
//     finalPrice.innerText = "Cupón inválido";

//   }
// }

// Cupones con arrays  y objetos

let cupones = [];

cupones.push({
  cupon: "PLATZI20",
  discount: 20,
});
cupones.push({
  cupon: "PLATZI50",
  discount: 50,
});

function precioTotal(cuponSelected) {
  cuponSelected = cuponName.value;
  // Validar si los inputs están vacíos
  if (!cuponName.value == "" && !price.value == "") {
    // Busar en el array la coincidencia con el parámetro que trae la función
    let findCupon = cupones.find(function (cupon) {
      return cupon.cupon === cuponSelected;
    });
    // Validar si existe el cupón, si existe (true) hace el calculo para el nuevo precio
    if (findCupon) {
      let precioFinal;
      let descuento = findCupon.discount;
      precioFinal = (parseInt(price.value) * (100 - descuento)) / 100;
      finalPrice.innerText = `Usted tiene el ${descuento}% de descuento, precio final: $${precioFinal}`;
    } else {
      finalPrice.innerText = `Cupón inválido`;
    }
  } else {
    finalPrice.innerText = `Por favor, ingrese todos los datos solicitados`;
  }
}
