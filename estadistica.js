//! Promedio

let arrAges = [
  38, 38, 38, 40, 35, 39, 37, 37, 40, 37, 36, 35, 36, 40, 40, 42, 41, 42, 39,
  41, 38, 39, 35, 36, 42, 42,
];
let mediana,
  avgAges,
  moda,
  varEstadistica,
  variablesEst = [],
  frecAbsoluta = [],
  sumFrecAbs,
  frecRelativa = [],
  sumFrecRel,
  percentages = [],
  sumPercent = 0,
  frecAbsAcum = [],
  sumFrecAbsAcum,
  frecRelAcum = [],
  sumFrecRelAcum,
  percAcum = [],
  sumPercAcum;

const estadistica = {};
console.log(estadistica);
// ordernar array
estadistica.orderArr = orderArr = (arr) => {
  const list = arr.sort((a, b) => a - b);
  return list;
};

// ordernar array bidimensional
estadistica.orderArrBid = orderArrBid = (arr, i) => {
  const list = arr.sort((a, b) => a[i] - b[i]);
  return list;
};

estadistica.avgArr = avgArr = (arr) => {
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
estadistica.medArr = medArr = (arr) => {
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
    mediana = estadistica.avgArr(listaMedios);
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

estadistica.modArr = modArr = (arr) => {
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
  let pContainer = document.querySelector(".frec");
  let numeros = document.querySelector(".nums");
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
    numeros.appendChild(p);
  });

  let sumatoria = document.createElement("p");
  sumatoria.innerText = `Sumatoria`;
  numeros.appendChild(sumatoria);

  let valuesFrecAbs = Object.values(listElements);
  valuesFrecAbs.forEach((element) => {
    let p = document.createElement("p");
    p.innerText = element;
    pContainer.appendChild(p);
    frecAbsoluta.push(element);
  });
  sumFrecAbs = frecAbsoluta.reduce((a, b) => a + b);
  let p = document.createElement("p");
  p.innerText = `${sumFrecAbs}`;
  pContainer.appendChild(p);
};

frecArr(arrAges);

//! Frecuencia relativa

const frecRelArr = (arr) => {
  let pContainer = document.querySelector(".frecRel");

  arr.forEach((element) => {
    let p = document.createElement("p");
    let frecRela = (element / sumFrecAbs).toFixed(4);
    p.innerText = frecRela;
    pContainer.appendChild(p);
    frecRelativa.push(parseFloat(frecRela));
  });
  sumFrecRel = Math.round(frecRelativa.reduce((a, b) => a + b));
  let p = document.createElement("p");
  p.innerText = `${sumFrecRel}`;
  pContainer.appendChild(p);
};

frecRelArr(frecAbsoluta);

//! Porcentaje
const percenArr = (arr) => {
  let pContainer = document.querySelector(".percent");

  arr.forEach((element) => {
    let p = document.createElement("p");
    let percent = (element * 100).toFixed(2);
    percentages.push(parseFloat(percent));
    p.innerText = percent;
    pContainer.appendChild(p);
    sumPercent += element;
  });
  let p = document.createElement("p");
  p.innerText = `${Math.round(sumPercent) * 100}`;
  pContainer.appendChild(p);
};

percenArr(frecRelativa);

//! Frecuencia absoluta acumulada

const frecAcum = (arr) => {
  let listElements = {};
  let pContainer = document.querySelector(".frecAbsAcum");

  arr.forEach((element, i) => {
    listElements[i] = element;

    let valores = Object.values(listElements);

    sumFrecAbsAcum = valores.reduce((a, b) => a + b);
    frecAbsAcum.push(sumFrecAbsAcum);

    let p = document.createElement("p");
    p.innerText = sumFrecAbsAcum;
    pContainer.appendChild(p);
  });
};

frecAcum(frecAbsoluta);

//! Frecuencia relativa acumulada

const frecAcumRel = (arr) => {
  let listElements = {};
  let pContainer = document.querySelector(".frecRelAcum");

  arr.forEach((element, i) => {
    listElements[i] = element;

    let valores = Object.values(listElements);

    sumFrecRelAcum = valores.reduce((a, b) => a + b);
    frecRelAcum.push(sumFrecRelAcum);
    let p = document.createElement("p");
    p.innerText = sumFrecRelAcum.toFixed(4);
    pContainer.appendChild(p);
  });

  let lastChildP = pContainer.lastChild;
  lastChildP.textContent = parseFloat(Math.round(lastChildP.textContent));
};

frecAcumRel(frecRelativa);

//! Porcentaje acumulado

const percAcumRel = (arr) => {
  let listElements = {};
  let pContainer = document.querySelector(".percAcum");

  arr.forEach((element, i) => {
    listElements[i] = element;

    let valores = Object.values(listElements);
    sumPercAcum = valores.reduce((a, b) => a + b);
    sumPercAcum = (sumPercAcum * 100).toFixed(2);

    percAcum.push(parseFloat(sumPercAcum));
    let p = document.createElement("p");
    p.innerText = sumPercAcum;
    pContainer.appendChild(p);
  });

  let lastChildP = pContainer.lastChild;
  lastChildP.textContent = parseFloat(Math.round(lastChildP.textContent));
};

percAcumRel(frecRelativa);
