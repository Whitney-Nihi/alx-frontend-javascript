// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  let employeesList = [];

  // Extract all the employees from all departments
  for (const department in report.allEmployees) {
    employeesList = [...employeesList, ...report.allEmployees[department]];
  }

  // Return the iterator for the employeesList array
  return employeesList[Symbol.iterator]();
}
