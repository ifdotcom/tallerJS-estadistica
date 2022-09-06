//! Promedio

let arrAges = [
  38, 38, 38, 40, 35, 39, 37, 37, 40, 37, 36, 35, 36, 40, 40, 42, 41, 42, 39,
  41, 38, 39, 35, 36, 42, 42,
];
let mediana;
let avgAges;
let moda;
let varEstadistica;
let frecAbsoluta = [];
let sumFrecAbs;
let frecRelativa = [];
let sumFrecRel;
let sumPercent = 0;
let frecAbsAcum = [];
const avgArr = (arr) => {
  let totalAges = arr.length;
  let sumAges = 0;
  //! método for
  // for (let i = 0; i < arr.length; i++) {
  //   sumAges = sumaAges + arr[i];
  //   avgAges = sumaAges / totalAges;
  // }

  // console.log(avgAges);
  // return avgAges;

  //! método for of
  // for (age of arrAges) {
  //   sumAges = sumAges + age;
  //   avgAges = sumAges / totalAges;
  // }
  // console.log(avgAges);
  // return avgAges;

  //! método reduce
  sumAges = arr.reduce((a, b) => a + b);
  avgAges = sumAges / totalAges;
  return avgAges;
};

avgArr(arrAges);
console.log("El promedio es: " + avgAges);

//! Mediana

// Función para saber si elarray es par o impar y obtener la mediana
const medArr = (arr) => {
  //! método sort
  // function ordernar(valorAcumlado, nuevoValor) {
  //   if (valorAcumlado > nuevoValor) {
  //     return 1;
  //   } else if (valorAcumlado == nuevoValor) {
  //     return 0;
  //   } else if (valorAcumlado < nuevoValor) {
  //     return -1;
  //   }
  // }
  //! funcionamiento forma acortada a - b:
  //return 5 - 10 -> -5 (negativo)
  //return 5 - 5 -> 0 (cero)
  //return 10 - 5 -> 5 (positivo)
  const arrOrder = orderArr(arr);

  let indexArrImpar, indexArrParA, indexArrParB;

  if (arrOrder.length % 2 == 0) {
    const listaMedios = [];

    indexArrParA = arrOrder[arrOrder.length / 2];
    indexArrParB = arrOrder[arrOrder.length / 2 - 1];
    listaMedios.push(indexArrParA, indexArrParB);
    mediana = avgArr(listaMedios);
  } else {
    indexArrImpar = Math.floor(arrOrder.length / 2);
    mediana = arrOrder[indexArrImpar];
  }
  return mediana;
};

medArr(arrAges);
console.log("La mediana es: " + mediana);

//! Moda

// Función para calcular la moda de un array

const modArr = (arr) => {
  const listElements = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // si existe el valor del índice se le suma 1, si solo existe una vez será = 1
    if (listElements[element]) {
      listElements[element] += 1;
    } else {
      listElements[element] = 1;
    }
  }
  // console.log(listElements)
  let arrBi = Object.entries(listElements);
  let arrBiOrder = orderArrBid(arrBi, 1);
  let numberMax = arrBiOrder[arrBiOrder.length - 1];
  let numberMaxBefore = arrBiOrder[arrBiOrder.length - 2];
  // Si hay más de un término que aparece la mayor cantidad de veces, entonces no hay moda.
  if (numberMax[1] === numberMaxBefore[1]) {
    moda = "No hay moda";
  } else {
    moda = numberMax[0];
  }
  return moda;
};

modArr(arrAges);
console.log("La moda es: " + moda);

//! Frecuenta absoluta

const frecArr = (arr) => {
  const listElements = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (listElements[element]) {
      listElements[element] += 1;
    } else {
      listElements[element] = 1;
    }
  }
  varEstadistica = Object.keys(listElements);
  varEstadistica.forEach((element) => {
    let p = document.createElement("p");
    p.innerText = element;
    document.querySelector(".nums").appendChild(p);
  });
  let valuesFrecAbs = Object.values(listElements);

  valuesFrecAbs.forEach((element) => {
    let p = document.createElement("p");
    p.innerText = element;
    document.querySelector(".frec").appendChild(p);
    frecAbsoluta.push(element);
  });
  sumFrecAbs = frecAbsoluta.reduce((a, b) => a + b);
  let p = document.createElement("p");
  p.innerText = `Sumatoria: ${sumFrecAbs}`;
  document.querySelector(".frec").appendChild(p);
};

frecArr(arrAges);

//! Frecuencia relativa

function frecRelArr(arr) {
  arr.forEach((element) => {
    let p = document.createElement("p");
    let frecRela = (element / sumFrecAbs).toFixed(4);
    p.innerText = frecRela;
    document.querySelector(".frecRel").appendChild(p);
    frecRelativa.push(parseFloat(frecRela));
  });
  sumFrecRel = Math.round(frecRelativa.reduce((a, b) => a + b));
  let p = document.createElement("p");
  p.innerText = `Sumatoria: ${sumFrecRel}`;
  document.querySelector(".frecRel").appendChild(p);
}

frecRelArr(frecAbsoluta);

//! Porcentaje
function percenArr(arr) {
  arr.forEach((element) => {
    let p = document.createElement("p");
    let percent = (element * 100).toFixed(2);
    p.innerText = percent;
    document.querySelector(".percent").appendChild(p);
    sumPercent += element;
  });
  let p = document.createElement("p");
  p.innerText = `Sumatoria: ${Math.round(sumPercent) * 100}`;
  document.querySelector(".percent").appendChild(p);
}

percenArr(frecRelativa);

//! Frecuencia absout acumulada

function frecAcum(arr) {
  console.log(arr);
  let listElements = {};

  arr.forEach((element, i) => {
    const indices = [];
    indices.push(i);
    // console.log(indices);
    // console.log(element);
    listElements[indices] = element;

    let valores = Object.values(listElements);
    // guardar en un array para despues mostrar
    frecAbsAcum.push(valores.reduce((a, b) => a + b));
    // console.log(valores.reduce((a, b) => a + b));
  });

  console.log(frecAbsAcum);
}

frecAcum(frecAbsoluta);

// ordernar array
function orderArr(arr) {
  const list = arr.sort((a, b) => a - b);
  return list;
}

// ordernar array bidimensional
function orderArrBid(arr, i) {
  const list = arr.sort((a, b) => a[i] - b[i]);
  return list;
}
