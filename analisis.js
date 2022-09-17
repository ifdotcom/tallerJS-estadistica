const companyElements = {};
//! Funcion para encontrar persona

function findPerson(personName) {
  //! find -> devuelve el primer elemento(objeto) que encuentre de acuerdo a la condición
  return salarios.find((person) => person.name == personName);
}

//! Funcion para encontrar la mediana de salarios
function medSalaries(personName) {
  let jobs = findPerson(personName).trabajos;
  console.log(jobs);
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

//! Función para obetener la mediana por año de una empresa

function medianaByYear(company, year) {
  
  if (!companyElements[company]) {
    console.log(`La empresa ${company} no existe`);
  } else if (!companyElements[company][year]) {
    console.log(
      `La empresa ${company} no registró salarios para el año ${year}`
    );
  } else {
    return console.log(estadistica.medArr(companyElements[company][year]));
  }
}

medianaByYear("Freelance", 2018);


