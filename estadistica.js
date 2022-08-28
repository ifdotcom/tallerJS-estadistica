//! Promedio

let arrAges = [15,20,55,80,23,40]; // 15 20 23 40 55 80
let mediana;
let avgAges;
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

    console.log(avgAges);
    return avgAges;
};

avgArr(arrAges);
console.log("El promedio es: " + avgAges);

//! Mediana

// Función para saber si elarray es par o impar y obtener la mediana
const arrElements = (arr) => {
  const arrOrder = arr.sort((a, b) => a - b);
  let indexArrImpar, indexArrParA, indexArrParB;

  if (arrOrder.length % 2 == 0) {
    indexArrParA = arrOrder[arrOrder.length / 2];
    indexArrParB = arrOrder[(arrOrder.length / 2) - 1];
    mediana = (indexArrParA + indexArrParB) / 2;
    console.log(mediana)
  } else {
    indexArrImpar = Math.floor(arrOrder.length / 2);
    mediana = arrOrder[indexArrImpar];
  }
  return mediana;
};

arrElements(arrAges);
console.log("La mediana es: " + mediana);
