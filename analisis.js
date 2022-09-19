const companyElements = {};

//! Funcion para encontrar persona
function findPerson(personName) {
  //! find -> devuelve el primer elemento(objeto) que encuentre de acuerdo a la condición
  return salarios.find((person) => person.name == personName);
}

//! Funcion para encontrar la mediana de salarios
function medSalaries(personName) {
  let jobs = findPerson(personName).trabajos;

  //! map -> devuelve un array con los elementos [500,550,800,...]
  const salaries = jobs.map((element) => {
    return element.salario;
  });
  // let salaries = [];
  // jobs.forEach((element) => {
  //   salaries.push(element.salario);
  // });
  const medianaSalaries = estadistica.medArr(salaries);
  return medianaSalaries;
}

//! Funcion para calcular la proyeccion salarial por persona
function personalProjection(personName) {
  let jobs = findPerson(personName).trabajos;
  let growthPercentages = [];

  for (let i = 1; i < jobs.length; i++) {
    const currentSalary = jobs[i].salario;
    const previousSalary = jobs[i - 1].salario;
    // crecimiento año con año
    const growth = currentSalary - previousSalary;
    // porcentaje de crecimiento
    const growthPercentage = growth / previousSalary;
    growthPercentages.push(growthPercentage);
  }
  const medianaGrowth = estadistica.medArr(growthPercentages);
  const lastSalary = jobs[jobs.length - 1].salario;

  let increase = lastSalary * medianaGrowth;
  let newSalary = increase + lastSalary;

  return newSalary;
}
//! Analisis empresarial

//! Función para reorganizar la información del array original y guardar la información en un objeto:
/*
nameEmpresa: {
   year: [salarie, salarie, salarie],
   year: [salarie, salarie, salarie]
 },
nameEmpresa: {
   year: [salarie, salarie, salarie],
   year: [salarie, salarie, salarie]
 },
 */
function companyProjection(arr) {
  arr.forEach((element) => {
    const jobs = element.trabajos;

    for (let i = 0; i < jobs.length; i++) {
      const company = jobs[i].empresa;
      const years = jobs[i].year;
      const salarie = jobs[i].salario;
      if (!companyElements[company]) {
        companyElements[company] = {};
      }
      if (!companyElements[company][years]) {
        companyElements[company][years] = [];
      }
      companyElements[company][years].push(salarie);
    }
  });
}

companyProjection(salarios);

//! Función para obetener la mediana de un año en específico de una empresa
function medianaByYear(company, year) {
  if (!companyElements[company]) {
    console.log(`La empresa ${company} no existe`);
  } else if (!companyElements[company][year]) {
    console.log(
      `La empresa ${company} no registró salarios para el año ${year}`
    );
  } else {
    return estadistica.medArr(companyElements[company][year]);
  }
}

medianaByYear("Freelance", 2020);

//! Función para hacer la proyección a un año por empresa
function companyProjectionNextYear(companyName) {
  if (companyElements[companyName]) {
    //obtener las Keys(años)
    let years = Object.keys(companyElements[companyName]);

    //guardar en un array la mediana de cada año -> map hace el array e itera cada año, por cada uno ejecuta la funcion medianaByYear
    let medianasList = years.map((year) => {
      return medianaByYear(companyName, year);
    });
    console.log(medianasList);
    // Calcular la mediana de las medianas por año
    let growthPercentages = [];
    for (let i = 1; i < medianasList.length; i++) {
      const currentMediana = medianasList[i];
      const previousMediana = medianasList[i - 1];
      // crecimiento año con año
      const growth = currentMediana - previousMediana;
      // porcentaje de crecimiento
      const growthPercentage = growth / previousMediana;
      growthPercentages.push(growthPercentage);
    }
    const medianaGrowth = estadistica.medArr(growthPercentages);
    const lastMediana = medianasList[medianasList.length - 1];

    let increase = lastMediana * medianaGrowth;
    let newMediana = increase + lastMediana;

    return newMediana;
  } else {
    console.log("La empresa no existe");
  }
}

companyProjectionNextYear("Freelance");

//! Función para sacar la mediana general
function generalMediana() {
  // crear array que guarde la mediana de cada persona

  let medianasList = salarios.map((person) => {
    return medSalaries(person.name);
  });

  let mediana = estadistica.medArr(medianasList);
  return mediana;
}

//! Funcion para obtener el top 10%
function topTen() {
  // crear array que guarde la mediana de cada persona

  let medianasList = salarios.map((person) => {
    return medSalaries(person.name);
  });

  // ordenar array de medianas
  let medianasListOrder = estadistica.orderArr(medianasList);

  // calcular el 10% del total de medianas -> 20 / 10
  let percentage = medianasListOrder.length / 10;

  // Marcar el limite para sacar al porcentaje anterior
  let limit = medianasListOrder.length - percentage;

  // utilizar slice o splice para obtener solo el porcentaje
  // slice retorna la seccion que se requiere, no modifica el array original
  // splice retorna la seccion que se requiere, modifica el arrat original
  let top = medianasListOrder.slice(limit, medianasListOrder.length);
  console.log(medianasListOrder, percentage, limit, top);
  return top;
}
