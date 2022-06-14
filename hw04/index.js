const fs = require('fs');
let employees = [
  {
    "name": "Employee1",
    "salary": 2000
  }
]

const createEmployeeFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile("employee.json", JSON.stringify(employees), 'utf8', (err) => {
      if (err) reject(err);
      resolve("Dosya yazıldı.");
    });
  });
}

const readEmployeeFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("employee.json", 'utf8' , (err, data) => {
      if (err) reject(err);
      resolve("Veri okundu");
    });
  });
}

const updateEmployeeFile = () => {
  let newEmployee = {
    "name": "Employee2",
    "salary": 3000
  }
  employees.push(newEmployee);

  return new Promise((resolve, reject) => {
    fs.writeFile('employee.json', JSON.stringify(employees), 'utf8', (err) => {
      if (err) reject(err);
      resolve("Güncelleme işlemi tamamdır.");
    });
  });
}

const deleteEmployeeFile = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.unlink("employee.json", (err) => {
        if (err) reject(err);
        resolve("Dosya silindi");
      });
    },3000);
  });
}



const process = async () => {
  await createEmployeeFile().then(res => console.log(res)).catch(err => console.log(err));
  await readEmployeeFile().then(res => console.log(res)).catch(err => console.log(err));
  await updateEmployeeFile().then(res => console.log(res)).catch(err => console.log(err));
  await deleteEmployeeFile().then(res => console.log(res)).catch(err => console.log(err));
}

process();