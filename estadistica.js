//! Promedio

let arrAges = [23, 23, 45, 56, 78, 80, 30, 12, 80, 34, 80, 23]; // 15 20 23 40 55 80
let mediana;
let avgAges;
let moda;
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
      listntsEleme[element] += 1;
    } else {
      listElements[element] = 1;
    }
  }

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
